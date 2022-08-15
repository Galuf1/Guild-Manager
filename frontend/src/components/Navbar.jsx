import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/logo.png'
import Logout from './Logout'

function NavBar ({user, whoami}) {

    return (
        <Navbar bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="50" height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>                        
                    </Nav>
                    <Nav className='me-auto'>
                        <Nav.Link href="/#/login">Login</Nav.Link>
                    </Nav>
                    <Nav className='me-auto'>
                        <Nav.Link href="/#/signup">Signup</Nav.Link>
                    </Nav>
                    <Nav className='me-auto'>
                        <Logout whoami={whoami} user={user}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar