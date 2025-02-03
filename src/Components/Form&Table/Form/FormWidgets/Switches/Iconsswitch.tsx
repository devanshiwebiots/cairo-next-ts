import { Card, CardBody, Col, Label } from "reactstrap";
import { IconsSwitchs } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";
import { IconSwitchData, IconSwitchDataList } from "@/Data/Form&Table/Form";

const Iconsswitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal" style={{ minHeight: "455px" }}>
        <CommonCardHeader title={IconsSwitchs} span={IconSwitchData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="flex-shrink-0 text-end icon-state">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>
                {text}
              </Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Iconsswitch;
