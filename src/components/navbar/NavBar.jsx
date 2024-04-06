import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.jpg'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
    <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={NavLink} to='/'><img src={logo} alt='logo' style={{width:'7rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to='/form'>Pedidos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/categories/puertas'>Puertas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/categories/ventanas'>Ventanas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/categories/portones'>Portones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/categories/griferia'>Grifería</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <NavLink to='/cart' style={{textDecoration:'none'}}><CartWidget counter={0}/></NavLink>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;