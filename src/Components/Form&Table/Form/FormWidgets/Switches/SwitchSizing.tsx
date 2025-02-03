import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SwitchSizings } from "@/Constant";
import { SwitchSizingData, SwitchSizingDataList } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const SwitchSizing = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={SwitchSizings} span={SwitchSizingData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="common-flex switch-wrapper">
          {SwitchSizingDataList.map(({ label, flexClass, defaultChecked, disabled }, index) => (
            <div className="d-flex" key={index}>
              <Label className="col-form-label m-r-10" check>
                {label}
              </Label>
              <div className={`flex-grow-1 text-end ${flexClass}`}>
                <Label className="switch">
                  <Input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                  <span className="switch-state"></span>
                </Label>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SwitchSizing;
