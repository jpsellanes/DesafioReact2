import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";


const NavBar =() => {
    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">JPSCAD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Simulations</Nav.Link>
                        <Nav.Link href="#link">PCB Design</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                        
        </>
        
    )
}

export default NavBar