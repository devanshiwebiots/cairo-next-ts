import { WebDesigner } from "@/Constant";
import { ScrollingLongWebDesingerData } from "@/Data/Uikits/Modal";
import React, { Fragment } from "react";
import { ArrowRightCircle } from "react-feather";

const WedDesigner = () => {
  return (
    <Fragment>
      <h5>{WebDesigner}</h5>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal" />
        </div>
        <div className="flex-grow-1 ms-2">
          <p>For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</p>
        </div>
      </div>
      {ScrollingLongWebDesingerData.map(({ text }, index) => (
        <div className="d-flex mt-2" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal" />
          </div>
          <div className="flex-grow-1 ms-2">
            <p>{text}</p>
          </div>
        </div>
      ))}
      <div className="d-flex my-2">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal" />
        </div>
        <div className="flex-grow-1 ms-2">
          <p className="pb-4">Most businesses employ a certain font or typography so that clients can quickly distinguish them from their rivals. Since designers now have access to a wider variety of fonts, firms may more easily and precisely communicate their brands through typography.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default WedDesigner;
