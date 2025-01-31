import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { MultipleBar } from "@/Constant";
import { MultipleBarsDataOne, MultipleBarsDataTwo, MultipleBarsSpan } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress } from "reactstrap";

const MultipleBars = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonUIkitsComponent title={MultipleBar} span={MultipleBarsSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Progress multi>
            {MultipleBarsDataOne.map(({ color, value }, index) => (
              <Progress value={value} color={color} bar key={index} />
            ))}
          </Progress>
          <Progress multi className="mt-2">
            {MultipleBarsDataTwo.map(({ color, value }, index) => (
              <Progress color={color} bar value={value} key={index} style={{ width: "10%" }} />
            ))}
          </Progress>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleBars;
