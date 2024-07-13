import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { json } from 'react-router-dom';
import Cookies from 'js-cookie';

const AddInventoryForm = () => {
    const addInventory = (event) => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const quantity = event.target.quantity.value;
        console.log(productName, quantity);
        const currentDate = new Date();
        console.log(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear());
        addInventoryApi(productName, quantity);
    };

    const addInventoryApi = async (productName, quantity) => {
        const data = {
            'name': productName,
            'quantity': quantity
        };

        const csrfToken = Cookies.get("csrf-token")
        // const csrfToken = '2OluWfwe6zlFteEMVgdbYifTzmPUP18x3A9N94oDyoSHTiNkbeNIAT6BgbGhimCh'; // Fetch CSRF token from cookies
        const api = axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                'X-CSRFToken': csrfToken, // Use the correct header name
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        try {
            const response = await api.post('/api/addNewProduct/', data);
            console.log(response);
        } catch (error) {
            console.error('Error:', error.response);
        }
    };

    return (
        <Form onSubmit={addInventory}>
            <h3>Add inventory here</h3>
            <Form.Group>
                <Form.Control name='productName' type='text' placeholder='Product Name' />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Control name='quantity' type='text' placeholder='Quantity' />
            </Form.Group>
            <br />
            <Button className='btn btn-danger' type='submit'>Add Inventory</Button>
        </Form>
    );
};

export default AddInventoryForm;
