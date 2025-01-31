import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PopoverOffsets } from "@/Constant";
import { OffsetData, OffsetList } from "@/Data/Uikits/Popover";
import { Card, CardBody, Col } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";

const PopoverOffset = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverOffsets} span={OffsetData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="common-flex popover-wrapper">
          {OffsetList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverOffset;
