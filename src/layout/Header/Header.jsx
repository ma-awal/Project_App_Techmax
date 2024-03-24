import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/logo-black.png';
import UserLogin from '../../components/UserLogin/UserLogin';
const navLink = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'about' },
  { id: 3, path: '/service', name: 'service' },
  { id: 4, path: '/blog', name: 'blog' },

  { id: 5, path: '/projects', name: 'projects' },
  { id: 6, path: '/pricing', name: 'pricing' },
  { id: 7, path: '/faq', name: 'faq' },
  { id: 8, path: '/contact', name: 'contact' },
  { id: 9, path: '/comming', name: 'comming' },
  { id: 10, path: '/term', name: 'term' },
  { id: 11, path: '/Privecy', name: 'Privecy' },
];
const Header = () => {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const [page, setPage] = useState(false);
  const togglePage = () => {
    setPage(!page);
  };

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  return (
    <nav className="navbar expand-md sticky-top bg-light  ">
      <div className="container">
        <a href="" className="navbar-brand">
          <img src={logo} alt="logo" className="img-fluid" />
        </a>

        <div className="sidebar-menu">
          <FaBars className="d-md-none " onClick={toggleSidebar} />
          <div className={`sidebar d-md-none ${visible ? 'show' : ''}`}>
            <div className="sidebar-items">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-start">Explore pages</h3>
                <button className="bg-transparent">
                  <FaTimes onClick={() => setVisible(false)} />
                </button>
              </div>
              {navLink.map((link) => (
                <NavLink className="nav-link text-capitalize" to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="m-auto nav-items d-none d-md-flex">
          {navLink.slice(0, 8).map((link) => (
            <NavLink className="nav-link text-capitalize" to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className=" d-none  d-md-flex ">
          <Link>
            <Button
              className="login-btn  rounded-0 text-white border-0"
              onClick={() => setModal(true)}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>

      {modal && <UserLogin modal={modal} onClose={handleClose} />}
    </nav>
  );
};

export default Header;
