import { NestingDataList } from "@/Data/Buttons/ButtonGroup";
import React, { Fragment } from "react";
import { Button, ButtonGroup } from "reactstrap";

const DynamicNesting = () => {
  return (
    <Fragment>
      {NestingDataList.map((item, index) => (
        <div className="m-b-30" key={index}>
          <ButtonGroup>
            <Button color="primary" size={item}>
              <i className="fa fa-bold"></i>
            </Button>
            <Button color="secondary" size={item}>
              <i className="fa fa fa-italic"></i>
            </Button>
            <Button color="success" size={item}>
              <i className="fa fa-file-image-o"></i>
            </Button>
            <Button color="info" size={item}>
              <i className="fa fa-paperclip"></i>
            </Button>
          </ButtonGroup>
        </div>
      ))}
    </Fragment>
  );
};

export default DynamicNesting;
