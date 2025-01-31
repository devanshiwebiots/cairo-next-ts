import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultRangeSliders } from "@/Constant";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangSlider";
import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliderForm } from "./DefaultRangeSliderForm";

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultRangeSliders} span={DefaultRangeSliderData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
