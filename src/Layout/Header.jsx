import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems} from "../Constants/Index.js";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import logo from "../assets/logo.png"
const Header = () => {
  return (
    <>
      <Navbar expand="md" collapseOnSelect className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="/">
            {/* <h1>Ashiful islam</h1> */}
            <img src={logo} alt="logo" width={90} className="bg-red-600 rounded-md" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
              {navItems.map((item) => (
                <Nav.Link key={item.id} href={item.url}>{item.title}</Nav.Link>
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
