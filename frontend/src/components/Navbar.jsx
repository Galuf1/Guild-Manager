import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/logo.png'
import Logout from './Logout'
import { useNavigate} from 'react-router-dom'

function NavBar ({user, whoami}) {

    return (
        <Navbar bg="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="50" height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-light" href="/">Home</Nav.Link>
                        <Nav.Link className="text-light" href="/#/dashboard">Dashboard</Nav.Link>                        
                    </Nav>
                    <Nav className='me-auto'>
                    </Nav>
                    <Nav className='me-auto'>
                    </Nav>
                    <Nav className='me-auto'>
                        <Nav.Link className="text-light" href="/#/login">Login</Nav.Link>
                        <Nav.Link className="text-light" href="/#/signup">Signup</Nav.Link>
                        <Logout whoami={whoami} user={user}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar