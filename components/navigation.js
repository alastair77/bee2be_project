import Container from "react-bootstrap/Container";
// import styles from '../public/styles.css'
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.PNG";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const Navigation = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container className="ml-0">
        <Link href="/">
          <Image src={logo} alt="logo"></Image>
        </Link>
        {/* <Navbar.Brand href="/">BEE2BE-TECH</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto font-weight-bold">
            <Nav.Link href="/about" className="ml-5">Quienes somos</Nav.Link>
            <Nav.Link href="/contacts" className="ml-5">Contactanos</Nav.Link>
            <Nav.Link href="/jobs" className="ml-5">Trabaja con nosotros</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown" className="ml-5">
              <NavDropdown.Item href="/outsourcing">
                Outsourcing
              </NavDropdown.Item>
              <NavDropdown.Item href="/observatorio">
                Observatorio
              </NavDropdown.Item>
              <NavDropdown.Item href="/marketing">
                Marketing 360
              </NavDropdown.Item>
              <NavDropdown.Item href="/subvenciones">
                Subvenciones
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
