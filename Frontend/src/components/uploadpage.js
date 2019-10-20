import React from 'react';
import ImageUploader from "../firebase/ImageUploader";
import {FilePond} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class UploadPage extends React.Component{
    render() {
        return(
            <div className={'page_content'}>
                <h1> Upload a File </h1>
                <h2> Add your Post </h2>
                <FilePond />
                <button>Upload</button>
            </div>
        );
    }
}

export default UploadPage;
