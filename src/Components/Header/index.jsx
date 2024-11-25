import 'bootstrap/dist/css/bootstrap.css';
import '../../App.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-primary">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action2">FB</Nav.Link>
          <Nav.Link href="#action2">X</Nav.Link>
          <Nav.Link href="#action2">Insta</Nav.Link>
          <Nav.Link href="#action2">YT</Nav.Link>
          <Nav.Link href="#action2">Twitch</Nav.Link>
          <Nav.Link href="#action2">TikTok</Nav.Link>
          <Nav.Link href="#action2">Discord</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Om oss</Nav.Link>
            <NavDropdown title="Deltakere" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">2025</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Kalender</Nav.Link>
            <Nav.Link href="#action2">Kontakt</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Søk"
              className="me-2"
              aria-label="Søk"
            />
            <Button variant="outline-success">Søk</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;