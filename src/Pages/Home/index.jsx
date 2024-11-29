import 'bootstrap/dist/css/bootstrap.css';
import '../../App.scss';
import Logo from '../../Images/eurovisionsquad_logo.png';
import Line from '../../Images/Line 3.png'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
<div className='d-flex justify-content-around mt-2'>
<img
      alt="Eurovisionsquad logo"
      src={Logo}
      height={100}
      width={300}
    ></img>
    </div>
    <div className='d-flex justify-content-around mt-4'>
    <img
    alt='Decorative line'
    src={Line}
    >
    </img>
    </div>
<div className='d-flex justify-content-around p-4'>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='d-flex justify-content-around p-4'>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    );
  }