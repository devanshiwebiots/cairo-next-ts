import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { OutlineFlatButtons, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const OutlineFlatButton = () => {
  return (
    <Col sm="12">
    <Card>
      <CommonCardHeader title={OutlineFlatButtons} />
      <CardBody className="btn-group-showcase">
        <Row>
          <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-square" outline={true} />
        </Row>
      </CardBody>
    </Card>
  </Col>
  )
}

export default OutlineFlatButton
