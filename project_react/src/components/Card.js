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
            "They say a person needs just three things to be truly happy in this
            world: Someone to love, something to do, and something to hope for."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
