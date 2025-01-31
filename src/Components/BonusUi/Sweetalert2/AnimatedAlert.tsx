import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedAlerts, ClickIt } from "@/Constant";
import { AnimatedAlertData } from "@/Data/BonusUi/Sweetalert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const AnimatedAlert = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Custom animation with Animate.css",
      showConfirmButton: true,
      confirmButtonText: "Okay",
      showClass: {
        popup: "animate__animated animate__fadeInUp",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown",
      },
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AnimatedAlerts} span={AnimatedAlertData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="primary" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedAlert;
