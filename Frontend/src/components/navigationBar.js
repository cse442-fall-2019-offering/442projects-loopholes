import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
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
                    <Navbar.Brand href="/CSE442-542/2019-Fall/cse-442i/">UBulletin</Navbar.Brand>
                    <Nav className="mr-auto">

                        <Link className="NavigationBarLink" to="/CSE442-542/2019-Fall/cse-442i/home">Home</Link>
                        <Link className="NavigationBarLink" to="/CSE442-542/2019-Fall/cse-442i/create">Create</Link>

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

export default NavigationBar;
