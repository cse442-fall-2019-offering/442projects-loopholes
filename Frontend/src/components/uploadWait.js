import React, { useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


class UploadWait extends React.Component {

    state = {
        progress: "",
    };

    constructor(props) {
        super(props);
        this.resetState();
    }

    isWaiting() {
        alert("WHY");
        return this.state.progress.localeCompare("waiting") == 0;
    }

    resetState() {
        alert("1");
        this.setState({progress: "waiting"});
        alert("0");
    }

    startLoad() {
        //alert("hi");
        this.setState({progress: "loading"});
        alert("start");
    }

    endLoad(i) {
        if (i == 0) {
            this.setState({progress: "done"});
            alert("Nice")
        } else {
            this.setState({progress: "failed"});
            alert("Oh")
        }
    }

    renderStatus() {
        if (!(this.state.progress.localeCompare("waiting"))) {
            return null;
        }
        if (!(this.state.progress.localeCompare("loading"))) {
            return (
                <div className={"load_overlay"}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else if (!(this.state.progress.localeCompare("done"))) {
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
            );
        } else if (!(this.state.progress.localeCompare("failed"))) {
            return (
                <Jumbotron fluid>
                    <Container>
                        <h1>Upload Failed</h1>
                        <p> { this.state.progress } </p>
                        <p> Try uploading again! </p>
                        <Link to="/CSE442-542/2019-Fall/cse-442i/upload">
                            <Button onClick={this.resetState()}>Upload</Button>
                        </Link>
                        <Link to="/CSE442-542/2019-Fall/cse-442i/home">
                            <Button onClick={this.resetState()}>Home</Button>
                        </Link>
                    </Container>
                </Jumbotron>
            );
        }
        return (<p> YEO </p>);
    }

}

export default UploadWait;
