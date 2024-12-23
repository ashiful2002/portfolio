import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems } from "../Constants/Index.js";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

import logo from "../assets/logo.png";
import { NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar
        expand="md"
        collapseOnSelect
        className="bg-body-tertiary"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="rounded shadow ring-green-500 hover:ring-red-600">
              <h1 className="rounded-md bg-blue-600 px-2 text-white">
                A. islam
              </h1>
            </div>
            {/* <img src={logo} alt="logo" width={90} className="bg-red-600 rounded-md" srcset="" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-3 ms-auto text-center capitalize">
              {navItems.map((item) => (
                <Nav.Link key={item.id} href={item.url}>
                  {item.title}
                </Nav.Link>
                // <Link to={item.url} key={item.id}>{item.title}</Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
