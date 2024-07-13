import React from 'react';
import { PieChart } from '@mui/x-charts';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Axios } from 'axios';

function PieChartClass() {

    let id = 0;
    let newObj = [];
    let dataObj;

    const [data2, setData] = useState([]);


    // useEffect(() => {
        fetch("https://mocki.io/v1/052d0ae3-1b4d-45cc-a1d1-6acf0568e4b9")
            .then(response => response.json())
            .then((response) => {
                response.forEach(element => {
                    dataObj = { 'id': id, 'value': element.Quantity, 'label': element.category }
                    newObj.push(dataObj)
                    id++
                });
                setData();
                setData(newObj)
            })
            .catch((error) => {
                console.log("error", error);
            });
    // }, []);


    return <>
        <PieChart
            series={[
                {
                    data: data2,
                },
            ]}
            width={800}
            height={400}
        />
    </>
}

export default PieChartClass;