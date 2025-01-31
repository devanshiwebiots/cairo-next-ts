import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Instructions, SecondExample } from "@/Constant";
import { MNDeditortext } from "@/Data/Editors";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const MdeExampleTwo = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string) => setValue(newValue);
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={SecondExample} headClass="pb-0" />
            <CardBody>
              <Row className="editor_container">
                <Col md="6">
                  <SimpleMdeReact id="editor_container" options={{ autofocus: true, spellChecker: false }} onChange={handleChange} />
                </Col>
                <Col md="6" className="reader">
                  <h3>{Instructions}</h3>
                  <p>{MNDeditortext}</p>
                  <br />
                  {value}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MdeExampleTwo;
