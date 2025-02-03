import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BordersWithIcon } from "@/Constant";
import { BorderIconSwitchData, BorderIconSwitchDataList } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Label } from "reactstrap";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const BordersWithIcons = () => {
  return (
    <Col xl="4">
      <Card className="height-equal" style={{ minHeight: "455px" }}>
        <CommonCardHeader title={BordersWithIcon} span={BorderIconSwitchData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="common-flex flex-column switch-wrapper">
          {BorderIconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state switch-outline">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10">{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BordersWithIcons;
