import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { EdgesInputStyles } from "@/Constant";
import { EdgeInputStyleData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, Col, Form } from "reactstrap";
import { EdgesInputCardFooter } from "./Common/EdgesInputCardFooter";
import EdgesInputCardBody from "./EdgesInputCardBody";

const EdgesInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={EdgesInputStyles} span={EdgeInputStyleData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <Form className="theme-form dark-inputs" onSubmit={(e) => e.preventDefault()}>
          <EdgesInputCardBody />
          <EdgesInputCardFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
