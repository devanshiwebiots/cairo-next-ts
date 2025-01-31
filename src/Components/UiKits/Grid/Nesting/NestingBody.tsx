import { Fragment } from "react";
import { Row } from "reactstrap";

const NestingBody = () => {
  return (
    <Fragment>
      <div className="col-3">
        <span>Level 1: .col-3</span>
      </div>
      <div className="col-9">
        <div className="grid-wrapper pb-0">
          <Row className="g-2">
            <div className="col-5">
              <span className="border border-2">Level 2: .col-5</span>
            </div>
            <div className="col-7">
              <span className="border border-2">Level 2: .col-7</span>
            </div>
          </Row>
        </div>
      </div>
      <div className="col-8">
        <div className="grid-wrapper pb-0">
          <Row className="g-2">
            <div className="col-sm-2 col-4">
              <span className="border border-2">Level 1: .col-2</span>
            </div>
            <div className="col-sm-10 col-8">
              <span className="border border-2">Level 1: .col-10</span>
            </div>
          </Row>
        </div>
      </div>
      <div className="col-4">
        <span>Level 2: .col-4 </span>
      </div>
    </Fragment>
  );
};

export default NestingBody;
