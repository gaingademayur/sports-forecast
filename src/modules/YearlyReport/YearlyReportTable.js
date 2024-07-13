import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import Cookies from 'js-cookie';
import Dropdown from 'react-bootstrap/Dropdown';

const YearlyReportTable = () => {
    let [selectedYear, setSelectedYear] = useState("2024")
    let [YearlySales, setYearlySales] = useState([])

    const handleSelect = (eventKey) => {
        setSelectedYear(eventKey);
        getYearlyReport(eventKey)
    }

    useEffect(() => {
        getYearlyReport(2024)
    }, [])

    let getYearlyReport = (year) => {
        const csrfToken = Cookies.get("csrf-token")
        fetch("http://localhost:8000/api/getYearlySalesReport/" + year, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF': csrfToken
            },
        })
            .then(response => response.json())
            .then((res) => {
                setYearlySales(res.result)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (<>
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedYear ? `${selectedYear}` : 'Select year'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
                <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Table responsive>
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Quantity sold</th>
                </tr>
            </thead>
            <tbody>
                {
                    YearlySales.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product_name}</td>
                            <td>{item.overall_sale}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>)
}

export default YearlyReportTable