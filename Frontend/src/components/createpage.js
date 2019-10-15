import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class CreatePage extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          page: this.props.page
      }
  }
  render(){
    return(
        <div id="create-button-group">
            <Button variant="primary" size="lg" block>
                Upload a File
            </Button>
            <Button variant="primary" size="lg" block disabled>
                Create from Template (to be added)
            </Button>
        </div>
);
}
}

export default CreatePage;
