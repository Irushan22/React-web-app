import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import runnerfinishimg from "../../assets/man-ripping-finish.jpg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="signup-main">
        <Container fluid>
          <Row>
            <Col>
              <div className="hm-box-right signup-right-box">
                <h1>Getting Start with your device!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </Col>
            <Col>
              {/* <div className="hm-box-left">
              <div className="triangle-right signup-right"></div>
              <div className="hm-box-overlay-right signup-right-overlay"></div>
              <Image src={runnerfinishimg} alt="signupimg" />
            </div> */}
              <div className="Signup-box">
                <div className="Signup-box-heading">
                  <h3>Sign Up</h3>
                </div>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="name@ex234" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="12345@example.com"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                  </Form.Group>
                  <div className="custom-btn login-btn">
                    <a href="#">Register</a>
                  </div>
                  <div className="login-reg-link">
                    <a href="#">Already have a account? Sign In</a>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
