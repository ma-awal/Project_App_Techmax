import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/logo-black.png';
import UserLogin from '../../components/UserLogin/UserLogin';

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  return (
    <Navbar className="bg-white  " expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleNavLinks}>
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse
          id="navbar-nav"
          className={`${showNavLinks ? 'show' : ''}`}
        >
          <Nav className="m-auto nav-items">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
            <NavLink className="nav-link" to="/service">
              Service
            </NavLink>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="custom-dropdown   "
            >
              <Link className="dropItem" to="/projects">
                Projects
              </Link>

              <Link className="dropItem" to="/pricing">
                Pricing
              </Link>
              <Link className="dropItem" to="/faq">
                FAQ'S
              </Link>
              <Link className="dropItem" to="/comming">
                Comming soon
              </Link>
              <Link className="dropItem" to="/term">
                Term & Conditions
              </Link>
              <Link className="dropItem border-bottom-0" to="/Privecy">
                Privecy Policy
              </Link>
            </NavDropdown>
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>

          <Nav className=" d-none d-md-block  ">
            <Link>
              <Button
                className="login-btn rounded-pill"
                onClick={() => setModal(true)}
              >
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {modal && <UserLogin modal={modal} onClose={handleClose} />}
    </Navbar>
  );
};

export default Header;
