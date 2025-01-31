import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { BorderOpactity, Href } from "@/Constant";
import { BorderOpacityData, BorderOpacitySpan } from "@/Data/Uikits/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const BorderOpacity = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal" style={{ minHeight: "485.391px" }}>
        <CommonUIkitsComponent title={BorderOpactity} span={BorderOpacitySpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="border-opacity-wrapper">
          {BorderOpacityData.map(({ text, className }, index) => (
            <div key={index} className={`border p-2 mb-xl-3 mb-2 ${className}`}>
              <Link href={Href}>This is {text} border</Link>
            </div>
          ))}
          <div className="border p-2 border-opacity-10">
            <Link href={Href}>This is 10% opacity primary border</Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderOpacity;
