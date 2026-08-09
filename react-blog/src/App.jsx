import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';

const App = () => {
  return (
    <Navbar expand='lg' bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='#'>Navbar</Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarSupportedContent' />

        <Navbar.Collapse id='navbarSupportedContent'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>

            <Nav.Link href='#'>Link</Nav.Link>

            <NavDropdown title='Dropdown' id='navbarDropdown'>
              <NavDropdown.Item href='#'>Action</NavDropdown.Item>

              <NavDropdown.Item href='#'>Another action</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href='#'>Something else here</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link disabled>Disabled</Nav.Link>
          </Nav>

          <Form className='d-flex'>
            <Form.Control type='search' placeholder='Search' className='me-2' />

            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App;
