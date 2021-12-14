import { Link } from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../images/logo.png'
import './NavBar.scss'

export const NavBar = () => {
    return(
        <header>
            
            <Navbar bg="dark" className="navBar__text" variant="dark" expand="lg">
                <Container className="prueba">
                    <Navbar.Brand>
                    <Link to="/"><img loading="lazy" width="100" height="100" src={logo} alt="Logo Bariloche Outdoor"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={Link} className="pe-5 linkMenu" to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} className="pe-5 linkMenu" to="/productos/Carpas" >Carpas</Nav.Link>
                            <Nav.Link as={Link} className="pe-5 linkMenu" to="/productos/Bolsas">Bolsas de dormir</Nav.Link>
                            <Nav.Link as={Link} className="pe-5 linkMenu" to="/productos/Bicicletas">Bicis</Nav.Link>
                            <Nav.Link as={Link} className="pe-5 linkMenu" to="/productos/Kayaks">Kayaks</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

