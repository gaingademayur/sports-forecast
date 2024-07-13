import React, { useEffect, useState } from 'react';
import QuaterlyReportTable from './QuaterlyReportTable';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PieChartClass from '../../components/PieChart';

const QuaterlyReport = () => {

    const [reportYear, setReportYear] = useState(12);

    const rowStyle = {
        '--bs-gutter-x': 0,
    };

    const colStyle = {
        height: '50px'
    }

    useEffect(() => {
        console.log("report year: ", reportYear)
    },[reportYear])

    function handleYearChange(event) {
        setReportYear(event.target.value)
    }

    return <>
        <Row style={rowStyle}>
            <Col>
                <Form>
                    <Form.Select value={reportYear} onChange={handleYearChange}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </Form.Select>
                </Form>
                <PieChartClass />
            </Col>
            <Col style={colStyle}>
                <QuaterlyReportTable reportYear={reportYear} />
            </Col>
        </Row>
    </>
}

export default QuaterlyReport