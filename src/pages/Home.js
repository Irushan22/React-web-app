import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import runnerimg from "../assets/man-wearing-white.jpg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="hm-box">
        <Container fluid className="no-box-padding">
          <Row>
            <Col>
              <div className="hm-box-left">
                <div className="triangle-right"></div>
                <div className="hm-box-overlay-right"></div>
                <Image src={runnerimg} alt="seconeimg" />
              </div>
            </Col>
            <Col>
              <div className="hm-box-right">
                <h1>LET'S GET MOVING</h1>
                <h4>Multiple sprinter assistant devices and system</h4>
                <p>
                  The ultimate platform to improve your sprinting strategies
                  while increasing sprint performance.
                </p>
                <div className="custom-btn">
                  <a href="#">Join us now</a>
                </div>
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
