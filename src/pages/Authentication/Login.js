import React from "react";
import { Container, Form } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Login() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="login-box-bg">
        <div className="login-box">
          <div className="login-box-heading">
            <h3>Login</h3>
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="name@ex234" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="********" />
            </Form.Group>
            <div className="custom-btn login-btn">
              <a href="/Dashboard">Login</a>
            </div>
            <div className="login-reg-link">
              <a href="#">Don't have an account? Register</a>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
