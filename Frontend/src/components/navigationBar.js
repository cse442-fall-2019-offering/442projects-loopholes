import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class navigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }
    render() {
        return(
            <div>
                <Navbar sticky="top" variant="dark" expand="lg" className="NavigationBar">
                    <Navbar.Brand href="#home">UBulletin</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="NavigationBarLink" href="#home">Home</Nav.Link>
                        <Nav.Link className="NavigationBarLink" href="#create">Create</Nav.Link>
                        <NavDropdown title="Sort" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Date</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                </Navbar>
            </div>
        );
    }
}

export default navigationBar;