import { UXDesigners } from "@/Constant";
import { ScrollingLongUXDesigner } from "@/Data/Uikits/Modal";
import React, { Fragment } from "react";
import { ArrowRightCircle } from "react-feather";

const UXDesigner = () => {
  return (
    <Fragment>
      <h6>{UXDesigners}</h6>
      {ScrollingLongUXDesigner.map(({ text }, index) => (
        <div className="d-flex mt-3" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal" />
          </div>
          <div className="flex-grow-1 ms-2">
            <p>{text}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default UXDesigner;
