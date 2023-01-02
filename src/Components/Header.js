import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
      <>
        <Navbar bg="dark" variant="dark" id='dark'>
          <Container>
            <img src="/netflexi.png" alt='not found'></img>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">TV Shows</Nav.Link>
              <Nav.Link href="#pricing">Movies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </>
    );
  }
  
  export default Header;