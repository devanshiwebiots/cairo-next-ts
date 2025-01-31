import { Card, CardBody, Col, Row } from "reactstrap";
import { CheckBoxButtonGroups } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ChechboxButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { DynamicCheckBoxButtonGroup } from "./DynamicCheckBoxButtonGroup";

const CheckBoxButtonGroup = () => {
  return (
    <Col sm="12">
      <Card className="radio-checkbox-group">
        <CommonCardHeader title={"CheckBox Button Group"} span={ChechboxButtonGroupData} headClass='pb-0' spanClass="mt-1 mb-0"/>
        <CardBody className="btn-group-showcase">
          <Row>
            <DynamicCheckBoxButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckBoxButtonGroup