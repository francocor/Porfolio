import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFigma } from "react-icons/si";
import { DiVisualstudio,DiGit, } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <DiGit />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiSolidFileJson />
      </Col>
    </Row>
  );
}

export default Toolstack;