import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DividerDropdowns } from "@/Constant";
import { DividerData, DividerSortData } from "@/Data/Uikits/Dropdown";
import { ButtonGroup, Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const DividerDropdown = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DividerDropdowns} span={DividerData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
            </ButtonGroup>
            {DividerSortData.map((data, index) => (
              <CommonDropDown key={index} item={data} /> 
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerDropdown;
