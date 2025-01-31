import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicDropdowns } from "@/Constant";
import { DropDownData, DropDownList } from "@/Data/Uikits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const BasicDropdown = () => {
  return (
    <Col xl="6">
      <Card className="height-equal custom-basic-dropdown">
        <CommonCardHeader title={BasicDropdowns} span={DropDownData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {DropDownList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropdown;
