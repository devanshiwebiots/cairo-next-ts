import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, TitleWithTextUnders } from "@/Constant";
import { TitleSweetAlert } from "@/Data/BonusUi/Sweetalert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const TitleWithTextUnder = () => {
  const handleClick = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question",
      confirmButtonText: "Okay",
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithTextUnders} span={TitleSweetAlert} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button className="btn btn-secondary" onClick={handleClick}>
          {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithTextUnder;
