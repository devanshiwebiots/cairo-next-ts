import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AJAXRequestAlerts, ClickIt } from "@/Constant";
import { AJAXRequestAlertData } from "@/Data/BonusUi/Sweetalert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const AJAXRequestAlert = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Submit your Github username",
      html: `
            <input type="text" id="github-username" class="swal2-input" style="border: 1px solid #007bff; width: 80%;" >
            `,
      showCancelButton: true,
      confirmButtonText: "Look up",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const input = Swal.getPopup()?.querySelector("#github-username") as HTMLInputElement;
        if (!input.value) {
          Swal.showValidationMessage("Please enter a username");
        }
        return input.value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const username = result.value;
        Swal.fire(`You submitted: ${username}`);
      }
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AJAXRequestAlerts} span={AJAXRequestAlertData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="warning" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AJAXRequestAlert;
