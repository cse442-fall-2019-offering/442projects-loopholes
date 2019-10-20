import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const HomepageCard = ({
    imageLink,
    title,
    date,
    time,
    place
}) => {
    return (
        <Card border="primary" bg="light" text="dark">
            <Card.Img variant="top" src={imageLink} />
                <Card.Body>
                    <Card.Title>{title}
                            <br></br>
                            <br></br>
                            <small>
                                <div className="font-weight-bold">Date:</div> {date}
                                <br></br>
                                <br></br>
                                <div className="font-weight-bold">Time:</div> {time}
                                <br></br>
                                <br></br>
                                <div className="font-weight-bold">Place:</div> {place}
                            </small>
                    </Card.Title>
                </Card.Body>
            <Card.Footer>
                <div className="text-right">
                    <Form.Check text="dark" type="checkbox" label="Like" />
                </div>
            </Card.Footer>
        </Card>    
    );
};

HomepageCard.defaultProps = {
    title: "Untitled",
    date: "N/A",
    time: "N/A",
    place: "N/A"
}

export default HomepageCard;