import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { Initialletteravatar } from "@/Constant";
import { InitialLetterAvatarData, InitialLetterAvatarSpan } from "@/Data/Uikits/avatars";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const InitialLetterAvatar = () => {
  return (
    <Col xl="4" md="6" className="box-col-6">
      <Card className="height-equal" style={{minHeight:'227.219px'}}>
        <CommonUIkitsComponent title={Initialletteravatar} span={InitialLetterAvatarSpan} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody className="common-align flex-column align-items-start align-items-lg-center">
          <div className="letter-avatar">
            <h6 className="txt-primary bg-light-primary">P </h6>
            {InitialLetterAvatarData.map((data, i) => (
              <h6 className={`txt-${data.color} bg-light-${data.color}`} key={i}>{data.badge}</h6>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InitialLetterAvatar;
