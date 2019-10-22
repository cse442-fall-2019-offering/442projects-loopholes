import React from 'react';
import { useState } from 'react';
import {Button, Card, Image, Modal} from 'react-bootstrap';
import HomepageCard from "../components/homepageCard.js"


function ZoomIn() {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

        return(
            <div>
                <br></br>
                <Button
                variant="primary"
                onClick={handleShow}>
                    Zoom
                </Button>
                  <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton/>
                    <HomepageCard/>
                  </Modal>
            </div>
        );
}

export default ZoomIn;
