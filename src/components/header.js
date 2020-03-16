import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/PngItem_1850038.png';
import dashboard from '../services/dashboard.service'; 
class Header extends Component {
constructor(){
  super()
  this.handleLogout.bind(this);
}
 handleLogout = () =>{
   console.log('logout-1....')
    dashboard.getLogout()
  }
    render() {
      return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Image src={logo} width="100px"/>
                   </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/crud">CRUD</Nav.Link>
          <Nav.Link href="/mytable">Table</Nav.Link>
          <Nav.Link href="/apiIntegration">API Integration</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/logout" onClick={this.handleLogout}>logout</Nav.Link>
        </Nav>
      </Navbar>
      )
    }
  }
  
  
  export default Header;