import RatioImage from "@/CommonComponent/RatioImage";
import { Cairo, ImagePath, Invoice } from "@/Constant";
import React from "react";
import { Col, Row } from "reactstrap";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <RatioImage src={`${ImagePath}/logo/logo-1.png`} alt="logo" className="media-object img-80 img-fluid for-light" />
              <RatioImage src={`${ImagePath}/logo/logo.png`} alt="logo" className="media-object img-80 img-fluid for-dark" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h4 className="media-heading">{Cairo}</h4>
              <p>
                hello@Cairo.in
                <br />
                <span>289-335-6503</span>
              </p>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h4>
              {Invoice} #<span className="counter">1069</span>
            </h4>
            <p>
              Issued: May<span> 27, 2024</span>
              <br /> Payment Due: June <span>27, 2024</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
