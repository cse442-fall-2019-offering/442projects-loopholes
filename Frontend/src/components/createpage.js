import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }
  render() {
    return (
      <div className={"page_content"}>
        <Link to="/CSE442-542/2019-Fall/cse-442i/upload">
          <Button variant="primary" size="lg" block>
            Upload a File
          </Button>
        </Link>
        <Link to="/CSE442-542/2019-Fall/cse-442i/template">
          <Button variant="primary" size="lg" block>
            Create from Template
          </Button>
        </Link>
      </div>
    );
  }
}

export default CreatePage;
