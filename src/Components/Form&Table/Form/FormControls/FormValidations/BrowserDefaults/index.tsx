import { Card, Col } from "reactstrap";
import { BrowserDefault } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BrowserDefaultData } from "@/Data/Form& Table/Form";
import { BrowserDefaultsCardBody } from "./BrowserDefaultsCardBody";
const BrowserDefaults = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BrowserDefault} span={BrowserDefaultData} spanClass='mt-1 mb-0'headClass="pb-0"/>
        <BrowserDefaultsCardBody/>
      </Card>
    </Col>
  );
};

export default BrowserDefaults;
