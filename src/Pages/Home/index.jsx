import 'bootstrap/dist/css/bootstrap.css';
import '../../App.scss';
import Logo from '../../Images/eurovisionsquad_logo.png';

export default function Home() {
    return (
<div className='d-flex justify-content-around mt-2'>
<img
      alt="Eurovisionsquad logo"
      src={Logo}
      height={100}
      width={300}
    ></img>
    </div>
    );
  }