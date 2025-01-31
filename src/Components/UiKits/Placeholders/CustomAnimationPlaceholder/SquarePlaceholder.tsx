import { CustomAnimationPlaceholderData } from "@/Data/Uikits/Placeholder";
import React, { Fragment } from "react";
import { Col, Placeholder } from "reactstrap";

const SquarePlaceholder = () => {
  return (
    <Fragment>
      {CustomAnimationPlaceholderData.map(({ placeholderType, PlaceholderOne, PlaceholderTwo, Placeholderthird }, index) => (
        <Col sm="6" key={index}>
          <div className="placeholder-body">
            <div className="placeholder-start">
              <div className={placeholderType}></div>
            </div>
            <div className="placeholder-end">
              <div className={`placeholder-line ${PlaceholderOne}`}></div>
              <div className={`placeholder-line`}></div>
              <div className={`placeholder-line ${PlaceholderTwo}`}></div>
              <div className={`placeholder-line ${Placeholderthird}`}></div>
            </div>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default SquarePlaceholder;
