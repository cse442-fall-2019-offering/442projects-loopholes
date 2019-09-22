import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

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
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}
export default navigationBar;