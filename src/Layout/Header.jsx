import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems } from "../Constants/Index.js";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <Navbar
        expand="md"
        collapseOnSelect
        fixed="top"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <div className="rounded-md bg-blue-600 shadow-md shadow-blue-400">
              <h1 className="px-2 text-white">A. Islam</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-3 ms-auto text-center">
              {navItems.map(({ id, url, title }) => (
                <Nav.Link
                  key={id}
                  href={url}
                  className="capitalize"
                  activeclassname="active" // React Router v6 uses 'className' to set active class - see note below
                >
                  {title}
                </Nav.Link>
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
