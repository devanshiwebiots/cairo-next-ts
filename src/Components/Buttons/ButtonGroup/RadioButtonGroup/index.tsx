import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadioButtonGroups } from "@/Constant";
import { RadioButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DynamicRadioButtonGroup } from "./DynamicRadioButtonGroup";

const RadioButtonGroup = () => {
  return (
    <Col sm="12">
      <Card className="radio-checkbox-group">
        <CommonCardHeader title={RadioButtonGroups} span={RadioButtonGroupData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <CardBody className="btn-group-showcase">
          <Row>
            <DynamicRadioButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadioButtonGroup
