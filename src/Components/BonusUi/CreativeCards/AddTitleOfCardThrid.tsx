import { AddTitleOfCards } from "@/Constant";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const AddTitleOfCardThrid = () => {
  return (
    <Col xxl="3" className="col-4 xl-4">
      <Card className=" common-hover">
        <CardBody>
          <div className="overlay-card">
            <div className="overlay">
              <div className="overlay-box"></div>
              <div className="overlay-box overlay-heading">
                <h4 className="text-white text-truncate">{AddTitleOfCards}</h4>
                <hr />
              </div>
              <div className="overlay-box overlay-subtitle">
                <p className="overlay-pera">This is an example card for you to use. you are able to include subtitles in your according.</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddTitleOfCardThrid;
