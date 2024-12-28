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
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="rounded-md bg-blue-600 shadow-md shadow-blue-400">
              <h1 className="px-2 text-white">A. islam</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-3 ms-auto text-center capitalize">
              {navItems.map(({ id, url, title }) => (
                <Nav.Link key={id} href={url}>
                  {title}
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
