import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }
    render(){
        return(
            <div>
                <Navbar sticky="top" expand="lg" className="SearchBar">
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}

export default SearchBar;
