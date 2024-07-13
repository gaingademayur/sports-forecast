import React, { useEffect, useState, useReducer } from 'react';
import YearlyReportTable from './YearlyReportTable'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1, showText: !state.showText };
        case "toggle":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
}

const YearlyReport = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
    // let [name, setName] = useState("mayur")

    // useEffect(()=>{
    //     console.log(name)
    // }, [name])

    return (<>
        {/* <label>{ state.count }</label>
        <button onClick={()=>{
            dispatch({type: 'increment'})
        }}>increment</button>
        <button onClick={()=>{
            dispatch({type: 'toggle'})
        }}>toggle twice</button>
        <br />
        {state.showText && <p>this is the text</p>} */}

        {/* <br /> */}
        <YearlyReportTable></YearlyReportTable>
    </>);
}

export default YearlyReport;