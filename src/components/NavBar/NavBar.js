import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss'

export const NavBar = () => {
    return(
        <header>
            <Navbar bg="dark" className="navBar__text" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img loading="lazy" width="80" height="80" src="http://www.barilocheoutdoor.com/wp-content/uploads/2018/02/cropped-logo-outdoor-e1519657783489.png" alt="Logo Bariloche Outdoor"/> Bariloche Outdoor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto me-auto">
                            <Nav.Link  className="pe-5" href="#home">Inicio</Nav.Link>
                            <NavDropdown className="pe-5" title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Camping</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Montaña</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bicis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ski</NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget/>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Buscar"
                            />
                            <Button variant="outline-light">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

