import React from 'react';
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
<div>
      <h>Create page</h>
</div>
);
}
}

export default CreatePage;
