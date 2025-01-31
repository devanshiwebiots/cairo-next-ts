import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedRibbon } from "@/Constant";
import { AnimatedRibbonsData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col, Row } from "reactstrap";
import DaynamicAnimatedRibbons from "./DaynamicAnimatedRibbons";
import StaticAnimatedRibbons from "./StaticAnimatedRibbons";

const AnimatedRibbons = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={AnimatedRibbon} span={AnimatedRibbonsData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <StaticAnimatedRibbons />
            <DaynamicAnimatedRibbons />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedRibbons;
