import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, RichHtmlAlerts } from "@/Constant";
import { RichHtmlAlertData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const RichHtmlAlert = () => {
  const handleClick = () => {
    Swal.fire({
      title: 'HTML <span style="text-decoration: underline;">example</span>',
      html: 'You can use <strong>bold text</strong>, <a href="" style="color: #007bff; ">links</a>, and other HTML tags',
      icon: "info",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      customClass: {
        closeButton: 'swal2-close'
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={RichHtmlAlerts} span={RichHtmlAlertData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button color="warning" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RichHtmlAlert;
