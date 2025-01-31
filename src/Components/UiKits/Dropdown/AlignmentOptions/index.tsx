import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AlignmentOption } from "@/Constant";
import { AlienmentList, AlignmentOptionsData } from "@/Data/Uikits/Dropdown";
import { ButtonGroup, Card, CardBody, Col } from "reactstrap";
import CommonAlignment from "./CommonAlignment";

const AlignmentOptions = () => {
  return (
    <Col lg="12">
      <Card className="custom-alignment-options">
        <CommonCardHeader title={AlignmentOption} span={AlignmentOptionsData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              {AlienmentList.map((data, index) => (
                <CommonAlignment key={index} value={data} /> 
              ))} 
            </ButtonGroup> 
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlignmentOptions;
