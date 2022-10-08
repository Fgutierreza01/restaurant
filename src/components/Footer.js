import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          +56 2212345678
          </Navbar.Text>
          <Navbar.Text>
           nombre@sadasdas.cl
          </Navbar.Text>
          <Navbar.Text>
          2022 ahakjhahaag, Inc
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;