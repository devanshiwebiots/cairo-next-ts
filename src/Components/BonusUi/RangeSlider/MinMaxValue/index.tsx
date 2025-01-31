import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MinMaxValues } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import MinMaxValueForm from "./MinMaxValueForm";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MinMaxValues} headClass="pb-0" />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
