import React from "react";
import Card from "react-bootstrap/Card";

function ImageCard() {
  return (
    <div className="ImageCard">
      <Card>
        <Card.Header>Good morning!!</Card.Header>
        <Card.Img variant="flush" src="./images/snooze-wallpaper.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
