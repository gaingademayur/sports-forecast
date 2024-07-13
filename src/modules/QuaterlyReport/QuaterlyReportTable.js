import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Cookies from 'js-cookie';

const QuaterlyReportTable = ({ reportYear }) => {

    let [tableData, setTableData] = useState([])

    useEffect(() => {
        // setReportYear(reportYear)
        fetch("https://mocki.io/v1/56641414-cfc2-4803-a8eb-5192d321d2d2")
        .then(response => response.json())
        .then((data) => {
            console.log("called once")
            // setTableData();
            setTableData(data)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return <>
        {/* <span>report year: {year}</span> */}
        {/* <Table responsive>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Quality</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>{item.revenue}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table> */}
    </>;
}

export default QuaterlyReportTable;