import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoCloseTimers, ClickIt } from "@/Constant";
import { AutoCloseTimerData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const AutoCloseTimer = () => {
  const handleClick = () => {
    const duration = 1800;
    let countdown = duration;
    let timer: NodeJS.Timeout;

    Swal.fire({
      title: "Auto close alert!",
      html: `I will close in <strong>${countdown}</strong> milliseconds.`,
      confirmButtonText: "Okay",
      timer: duration,
      timerProgressBar: true,
      willOpen: () => {
        timer = setInterval(() => {
          countdown -= 100;
          const content = Swal.getHtmlContainer();
          if (content) {
            content.querySelector("strong")!.textContent = countdown.toString();
          }
          if (countdown <= 0) {
            clearInterval(timer);
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timer);
      },
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="col-sm-4">
      <Card>
        <CommonCardHeader title={AutoCloseTimers} span={AutoCloseTimerData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button color="danger" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;
