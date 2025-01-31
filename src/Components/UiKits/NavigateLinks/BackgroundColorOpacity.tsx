import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { BackgroundColorOpacitys, Href } from "@/Constant";
import { BackgroundColorOpacityData, BackgroundColorOpacitySpan } from "@/Data/Uikits/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const BackgroundColorOpacity = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal" style={{ minHeight: "485.391px" }}>
        <CommonUIkitsComponent title={BackgroundColorOpacitys} span={BackgroundColorOpacitySpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="bg-opacity-wrapper">
          {BackgroundColorOpacityData.map(({ text, className }, index) => (
            <div key={index} className={`p-2 mb-3 ${className}`}>
              <Link href={Href}>This is {text} background</Link>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorOpacity;
