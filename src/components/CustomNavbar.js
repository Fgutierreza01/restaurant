import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { IoRestaurantSharp } from "react-icons/io5";

function CustomNavbar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand ><IoRestaurantSharp/> Señor Jabalí</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/contacto">Contacto</Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default CustomNavbar;