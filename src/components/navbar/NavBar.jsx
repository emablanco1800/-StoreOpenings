import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
    return (
    <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Store openings</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Puertas</NavDropdown.Item>
                <li><hr class="dropdown-divider"/></li>
                <NavDropdown.Item href="#action/3.2">Ventanas</NavDropdown.Item>
                <li><hr class="dropdown-divider"/></li>
                <NavDropdown.Item href="#action/3.3">Portones</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidget counter={7}/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;