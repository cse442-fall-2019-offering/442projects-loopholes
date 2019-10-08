import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class createPage extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          page: this.props.page
      }
  }
  render(){
      return(
<div>
    <Card border="primary" bg="light" text="dark">

    </Card>
</div>
);
}
}

export default createPage;
