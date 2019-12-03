import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import ZoomIn from "./zoomin";
import Button from "react-bootstrap/Button";

class UpvoteButton extends React.Component{
    state={
        origVotes : 0,
        updateVotes : 0,
        vote: " upvotes",
        bgColor: 'outline-primary'
    };
    setVotes=()=>{
        if(this.state.updateVotes > 1 || this.state.updateVotes === 1){
            this.setState({ 
                vote: " upvotes"
            });
        }else if(this.state.updateVotes === 0){
            this.setState({ 
                vote: " upvote"
            });
        }
    };
    updateVotesHandler=(event)=> {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.updateVotes === this.state.origVotes){
            this.setState({ 
                updateVotes: this.state.updateVotes + 1,
                bgColor: 'primary'
            });
            this.setVotes();
        }else{
            this.setState({ 
                updateVotes: this.state.origVotes,
                bgColor: 'outline-primary'
            });
            this.setVotes();
        }
    };

    render(){
        return (
            <Button
            size="sm"
            variant={this.state.bgColor}
            onClick={e=>this.updateVotesHandler(e)}
            >{("" + this.state.updateVotes + this.state.vote)}</Button>
        );
    };
}

const HomepageCard = props => {
  const {
    imageLink,
    eventTitle,
    eventDate,
    eventTime,
    eventLocation,
    zoomed
  } = props;
  
  return (
    <Card border="primary" bg="light" text="dark">
      <Nav>
        <Nav.Item>
          <Nav.Link href={imageLink} target="_blank">
            <Card.Img variant="top" src={imageLink} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Card.Body>
        <Card.Title>
          {eventTitle}
          <br></br>
          <br></br>
          <small>
            <div className="font-weight-bold">Date:</div> {eventDate}
            <br></br>
            <br></br>
            <div className="font-weight-bold">Time:</div> {eventTime}
            <br></br>
            <br></br>
            <div className="font-weight-bold">Place:</div> {eventLocation}
          </small>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <div className="text-center">
          {!zoomed && <ZoomIn cardProps={props} />}
        </div>
        <div className="text-right">
            <UpvoteButton></UpvoteButton>
        </div>
      </Card.Footer>
    </Card>
  );
};

HomepageCard.defaultProps = {
  eventTitle: "Untitled",
  eventDate: "N/A",
  eventTime: "N/A",
  eventPlace: "N/A",
  zoomed: false
};

export default HomepageCard;