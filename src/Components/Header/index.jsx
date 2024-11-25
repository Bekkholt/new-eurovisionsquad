import 'bootstrap/dist/css/bootstrap.css';
import '../../App.scss';
import Icon from '../../Images/eurovisionsquad_icon.png';
import FacebookIcon from '../Icons/Facebook';
import XIcon from '../Icons/X';
import InstaIcon from '../Icons/Instagram';
import YouTubeIcon  from '../Icons/YouTube';
import TwitchIcon from '../Icons/Twitch';
import TiktokIcon from '../Icons/TikTok';
import DiscordIcon from '../Icons/Discord';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
    <Navbar className="bg-primary">
        <Nav>
          <Nav.Link href="#action2"><FacebookIcon/></Nav.Link>
          <Nav.Link href="#action2"><XIcon/></Nav.Link>
          <Nav.Link href="#action2"><InstaIcon/></Nav.Link>
          <Nav.Link href="#action2"><YouTubeIcon/></Nav.Link>
          <Nav.Link href="#action2"><TwitchIcon/></Nav.Link>
          <Nav.Link href="#action2"><TiktokIcon/></Nav.Link>
          <Nav.Link href="#action2"><DiscordIcon/></Nav.Link>
        </Nav>
  </Navbar>
    <Navbar expand="lg">
      <Container fluid>
        <Nav.Link href='/'>
      <img
          alt="Eurovisionsquad icon"
          src={Icon}
          height={60}
          width={60}
        ></img>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="../../Pages/Om oss">Om oss</Nav.Link>
            <NavDropdown title="Deltakere" id="navbarScrollingDropdown">
              <NavDropdown.Item href="../../Pages/Deltakere">2025</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="../../Pages/Kalender">Kalender</Nav.Link>
            <Nav.Link href="../../Pages/Kontakt">Kontakt</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Søk"
              className="me-2"
              aria-label="Søk"
            />
            <Button variant="outline-primary">Søk</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;