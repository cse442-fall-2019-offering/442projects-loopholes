import React from 'react';
import FilePond from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class UploadPage extends React.Component{
    render() {
        return(
            <div>
                <FilePond />
            </div>
        );
    }
}

export default UploadPage;
