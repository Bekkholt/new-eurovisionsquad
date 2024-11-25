import 'bootstrap/dist/css/bootstrap.css';
import '../../App.scss';
import Logo from '../../Images/eurovisionsquad_logo.png';
import Line from '../../Images/Line 3.png'

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
    </div>
    );
  }