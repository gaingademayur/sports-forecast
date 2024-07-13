import { React } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/home">My forecast</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/warehouse")}>Warehouse report</Nav.Link>
                        <Nav.Link href="/addInventory">Add new inventory</Nav.Link>
                        <Nav.Link href="/updateInventory">Update Inventory</Nav.Link>
                        <Nav.Link href="/yearlyReport">Yearly sales report</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;