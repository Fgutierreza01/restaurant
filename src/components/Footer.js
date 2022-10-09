import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";

function Footer() {
  return (
    <Navbar fixed='bottom'>
      <Container>
        <Navbar.Brand> <BsFillTelephoneFill/> +56 2212345678 </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <BsMailbox2/> info@srjabali.cl
        </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;