import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LiveToasts } from "@/Constant";
import { LiveToastData } from "@/Data/BonusUi/Toast";
import { Card, CardBody, Col } from "reactstrap";
import BottomLeftToast from "./BottomLeftToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import TopRightToast from "./TopRightToast";

const LiveToast = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LiveToasts} span={LiveToastData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
