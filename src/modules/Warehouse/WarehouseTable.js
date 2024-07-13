import { type } from '@testing-library/user-event/dist/type'
import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import Cookies from 'js-cookie'

const WarehouseTable = () => {
    let [warehouseData, setWarehouseData]  = useState([])
    useEffect(()=>{
        const csrfToken = Cookies.get("csrf_token")
        fetch("http://localhost:8000/api/getAllWarehouseData/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF': csrfToken
            },
        })
        .then(response => response.json())
        .then((res) => {
            console.log("called once")
            // setWarehouseData(res.data)
            console.log(res)
            setWarehouseData(res)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return (<>
        <Table responsive>
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Available quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    warehouseData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product_name}</td>
                            <td>{item.available_qty}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>)
}

export default WarehouseTable