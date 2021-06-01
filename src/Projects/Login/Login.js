import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="background">
      <div className="my-form-login">
        <div className="header">Zaloguj się do systemu</div>
        <Form>
          <Form.Group controlId="formGroup">
            <Form.Label>Login</Form.Label>
            <Form.Control className="mb-3" type="text" name="login" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <div className=".d-flex flex-row">
              <Form.Label className="ml-auto">Hasło</Form.Label>
              <div className="mr-auto">
                <Link id="forgot-password" to="/login/password-recovery">
                  Nie pamiętasz hasła?
                </Link>
              </div>
            </div>
            <Form.Control type="password" name="password" />
          </Form.Group>
          <div key={"default-radio"}>
            <Form.Check
              type="radio"
              name="radioOption"
              id="radio-option-1"
              label="Opcja 1"
              checked
            />

            <Form.Check
              type="radio"
              name="radioOption"
              id="radio-option-2"
              label="Opcja 2"
            />
          </div>
          <Button className="w-100 btn btn-lg" variant="primary" type="submit">
            Zaloguj
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
