import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
