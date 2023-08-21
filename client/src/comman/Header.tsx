import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">User Managment</Navbar.Brand>
    </Navbar>
  );
};
export default Header;