import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="primary" className='sticky-top ' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {user && <> <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage service</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>


                            </>}

                            <Nav.Link href="home#service">Service</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            {user ? <button onClick={handleSignOut} className='btn-primary border-0 text-white'>Sign Out</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;