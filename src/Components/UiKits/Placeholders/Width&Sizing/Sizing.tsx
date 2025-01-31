import { SizingTxt } from "@/Constant";
import React from "react";
import { Col, Placeholder } from "reactstrap";

const Sizing = () => {
  return (
    <Col xxl="12" md="6" className="box-col-6">
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title">{SizingTxt}</h6>
        <p className="f-m-light">
          The size of <code>placeholder</code> are based on the typographic style of the parent element. Customize them with sizing modifiers: <code>placeholder-lg, placeholder-sm, or placeholder-xs</code>.
        </p>
        <div className="card-body p-0 placeholder-glow">
          <Placeholder className=" col-12 placeholder-lg placeholder-light" />
          <Placeholder className=" col-12 placeholder-light" />
          <Placeholder className=" col-12 placeholder-sm placeholder-light" />
          <Placeholder className=" col-12 placeholder-xs placeholder-light" />
        </div>
      </div>
    </Col>
  );
};

export default Sizing;
