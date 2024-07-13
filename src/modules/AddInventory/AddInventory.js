import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddInventoryForm from './AddInventoryForm';
import PieChartClass from '../../components/PieChart';

const AddInventory = () => {

    const rowStyle = {
        "margin": 0
    }

    return <>
        <Row style={rowStyle}>
            {/* <Col><PieChartClass /></Col> */}
            <Col>
                <AddInventoryForm />
            </Col>
        </Row>
    </>
}

export { AddInventory };