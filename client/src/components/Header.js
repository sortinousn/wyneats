import React from "react"
import { NavLink } from "react-router-dom";

function Header() {
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>




    // const Header = () => {
    //     return (
    //       <div>
    //         <h1>Wyneats</h1>
    //       </div>
          
    //       )}
    //do a bunch of things

    
    // return (
    //     <nav>
    //         <NavLink exact activeClassName="active" to="/">
    //             Home
    //         </NavLink>
    //         <NavLink exact activeClassName="active" to="/Myeats">
    //             Myeats
    //         </NavLink>
    //         <NavLink exact activeClassName="active" to="/Contact">
    //             Contact
    //         </NavLink>
    //         <NavLink exact activeClassName="active" to="/About">
    //             About
    //         </NavLink>
    //     </nav>
    );
}
export default Header;



