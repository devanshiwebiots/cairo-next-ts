import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, PositionTopStarts } from "@/Constant";
import { PositionTopStartData } from "@/Data/BonusUi/Sweetalert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const PositionTopStart = () => {
  const handleClick = () => {
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Signed in Successfully",
      showConfirmButton: false,
      timer: 3000,
      toast: true,
      timerProgressBar: true,
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={PositionTopStarts} span={PositionTopStartData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button className="btn-secondary sweet-16" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PositionTopStart;
