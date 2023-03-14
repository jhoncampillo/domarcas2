import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Ir al Menu de Admon");
    navigate("/addDomain", { replace: true });
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Login</h1>
      <Form className="container-sm" style={{ width: "65%" }}>
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

          <Form.Text style={{ color: "white" }}>
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
              className="w-50"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              // style={{ width: "70%" }}
              type="Password"
              placeholder="Password"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ color: "white" }}
            type="checkbox"
            label="Acepto politicas de privacidad"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
