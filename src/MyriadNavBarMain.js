import React from 'react';
import {
    Nav,
    Navbar,
} from 'react-bootstrap';

function MyriadNavBarMain() {
  
  return (
    <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">Myriad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/entries">Entries</Nav.Link>
                <Nav.Link href="/wxrds">Wxrds</Nav.Link>
                <Nav.Link href="/xmlio">XML I/O</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyriadNavBarMain;