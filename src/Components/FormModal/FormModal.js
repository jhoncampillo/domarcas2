import React from "react";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export const FormModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const TituloModal = "Comprar Dominio";
  return (
    <>
      {/* <Button variant="dark" className="mx-2" onClick={handleShow}>
        Comprar
      </Button>
      <Button variant="dark" className="mx-2" onClick={handleShow}>
        Alquilar
      </Button>
      <Button variant="dark" className="mx-2" onClick={handleShow}>
        Ofertar
      </Button>
      <Button variant="dark" className="mx-2" onClick={handleClose}>
        Cerrar
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{TituloModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digita Tu correo</Form.Label>

            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                <FontAwesomeIcon icon={faEnvelope} className=" fa-2x mt-2" />
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                style={{ width: "70%" }}
                type="email"
                placeholder=" Email"
              />
            </InputGroup>

            <Form.Text className="text-muted">
              Nunca Compartiremos tu correo con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                <FontAwesomeIcon icon={faKey} className=" fa-2x mt-2" />
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                style={{ width: "70%" }}
                type="email"
                placeholder=" Email"
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "120px", width: "70%" }}
                />
              </FloatingLabel>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
