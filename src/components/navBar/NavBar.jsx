import { Image, Container, Nav, Navbar } from 'react-bootstrap';
import { CartWidget } from '../cartWidget/CartWidget';
import "./NavBar.css"


const Logo = () => {
    return (
        <Image
            src="https://res.cloudinary.com/dt1bumvty/image/upload/v1676178289/Spanish_logo_clyyid.png"
            alt="Logo"
            width={50}
            height={50}
        />
    );
}

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" className="NavBar">
                <Container className="w-100 container-fluid ms-0" style={{maxWidth:"100%"}}>
                    <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link href="#home" className="mx-5">Home</Nav.Link>
                        <Nav.Link href="#features" className="mx-5">Plans</Nav.Link>
                        <Nav.Link href="#aboutus" className="mx-5">About</Nav.Link>
                        <Nav.Link href="#contact" className="mx-5">Contact</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </> 
    ) ;
}

export default NavBar;