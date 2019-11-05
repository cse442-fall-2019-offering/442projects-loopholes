import React from "react";
import Spinner from 'react-bootstrap/Spinner'


class UploadWait extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: "done"
        };
    }

    startLoad() {
        this.setState({progress: "loading"});
        document.getElementById("home_page").style.height = "100%";
    }

    endLoad(i) {
        if(i==0) {
            this.setState({progress: "done"});
        } else {
            this.setState({progress: "failed"});
        }
        document.getElementById("home_page").style.height = "0%";
    }

    render() {
        if (this.state.progress == "loading") {
            return (
                <div className={"load_overlay"}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else if (this.state.progress)
    }

}

export default UploadWait;
