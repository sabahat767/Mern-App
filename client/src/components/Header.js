import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar  variant="dark" style={{backgroundColor:"#264653"}}>
    {/* <Navbar bg='info' variant="dark" > */}
    <Navbar.Brand as={Link} to="/">
        MERN App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
        <Button variant="success">Users</Button>
        </Nav.Link>
      
        <Nav.Link as={Link} to="/register">
        <Button variant="success">Register</Button>

        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
        <Button variant="success">Posts</Button>
         
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
        <Button variant="success">New Post</Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
