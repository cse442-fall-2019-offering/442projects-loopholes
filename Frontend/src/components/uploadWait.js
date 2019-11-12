import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


class UploadWait extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: "waiting"
        };
    }

    startLoad() {
        alert("hi");
        this.state.progress = "loading";
        alert(this.state.progress);
        document.getElementById("root").style.height = "100%";
    }

    endLoad(i) {
        if(i===0) {
            this.state.progress = "done";
            alert("Nice")
        } else {
            this.state.progress = "failed";
        }
        document.getElementById("root").style.height = "0%";
    }

    render() {
        if (this.state.progress === "loading") {
            return (
                <div className={"load_overlay"}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else if (this.state.progress === "done") {
            return (
                <Jumbotron fluid>
                    <Container>
                        <h1>Upload Complete!</h1>
                        <p> Go to the homepage to see your upload! </p>
                        <Link to="/CSE442-542/2019-Fall/cse-442i/home">
                            <Button variant="primary">Home</Button>
                        </Link>
                    </Container>
                </Jumbotron>
            )
        }
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Upload Failed</h1>
                    <p> Please try uploading again! </p>
                    <Link to="/CSE442-542/2019-Fall/cse-442i/upload">
                        <Button variant="primary">Upload</Button>
                    </Link>
                </Container>
            </Jumbotron>
        )
    }

}

export default UploadWait;
