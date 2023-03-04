import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import "../Qsomos/qsomos.css";

export const Qsomos = () => {
  return (
    <div className="bkqsomos">
      <h1 className="text-white mt-2 mb-5">Domarcas Nuestros Valores </h1>
      {/* <FontAwesomeIcon icon={faBell} /> */}
      <CardGroup className="mx-3">
        <Card
          className="bg-dark text-white"
          border="warning"
          style={{ width: "14rem" }}
        >
          <FontAwesomeIcon icon={faClockFour} className=" fa-5x mt-2" />
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

          <Card.Body>
            <Card.Title className="text-center">Cumplimiento</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          className="bg-dark text-white"
          border="warning"
          style={{ width: "18rem" }}
        >
          <FontAwesomeIcon icon={faBell} className=" fa-5x mt-2" />
          <Card.Body>
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          className="bg-dark text-white"
          border="warning"
          style={{ width: "18rem" }}
        >
          <FontAwesomeIcon icon={faBuilding} className=" fa-5x mt-2" />

          <Card.Body>
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};
