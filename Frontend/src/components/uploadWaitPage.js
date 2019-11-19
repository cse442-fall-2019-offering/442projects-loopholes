import React, { useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


class UploadWaitPage extends React.Component {

    state = {
        waiting: true,
        loading: false,
        done: false,
        failed: false
    };

    constructor(props) {
        super(props);
        this.resetState();
    }

    isWaiting() {
        alert("waiting");
        return this.state.waiting;
    }

    resetState() {
        this.setState({
                waiting: true,
                loading: false,
                done: false,
                failed: false
            });
        alert("restarting");
    }

    startLoad() {
        //alert("hi");
        this.setState({
            waiting: false,
            loading: true
        });
        alert("start");
    }

    endLoad(i) {
        if (i === 0) {
            this.setState({
                loading: false,
                done: true
            });
            alert("Nice")
        } else {
            this.setState({
                loading: false,
                failed: true
            });
            alert("Oh")
        }
    }

    renderStatus() {
        if (this.state.waiting) {
            return null;
        }
        if (this.state.loading) {
            return (
                <div className={"load_overlay"}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else if (this.state.done) {
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
        } else if (this.state.failed) {
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

    render() {
        return(
          this.renderStatus()
        );
    }

}

export default UploadWaitPage;
