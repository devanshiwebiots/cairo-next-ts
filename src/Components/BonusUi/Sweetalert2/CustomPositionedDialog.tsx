import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, CustomPositionedDialogs } from "@/Constant";
import { CustomPositionedDialogData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const CustomPositionedDialog = () => {
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={CustomPositionedDialogs} span={CustomPositionedDialogData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button className="sweet-19" color="warning" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomPositionedDialog;
