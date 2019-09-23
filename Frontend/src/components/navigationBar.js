import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
                <Navbar sticky="top" expand="lg" className="NavigationBar">
                    <Navbar.Brand href="#home">UBulleitin</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="NavigationBarLink" href="#home">Home</Nav.Link>
                        <Nav.Link className="NavigationBarLink" href="#create">Features</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default navigationBar;