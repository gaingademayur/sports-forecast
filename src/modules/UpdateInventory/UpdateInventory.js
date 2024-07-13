import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateInventory = () => {

     const navigate = useNavigate();
    let updateInventory = (event) => {
        event.preventDefault();
        console.log(event)
        const product_name = event.target.productName.value;
        const quantity = event.target.quantity.value;
        console.log(product_name)
        updateInventoryApi(product_name, quantity);
    }

    const updateInventoryApi = async (product_name, quantity) => {
        const data = {
            'name': product_name,
            'quantity': quantity
        };

        const csrfToken = Cookies.get("csrf-token");
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
            const response = await api.post('/api/updateInventory/', data);
            console.log(response);
            // if(response.res == 1 ){
            navigate("/warehouse")
            // }
        } catch (error) {
            console.error('Error:', error.response);
        }
    }

    return (<>
        <Form onSubmit={updateInventory}>
            <h3>Update inventory here</h3>
            <Form.Group>
                <Form.Control name='productName' type='text' placeholder='Product Name' />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Control name='quantity' type='text' placeholder='Quantity' />
            </Form.Group>
            <br />
            <Button className='btn btn-danger' type='submit'>Update Inventory</Button>
        </Form>
    </>)
}

export default UpdateInventory