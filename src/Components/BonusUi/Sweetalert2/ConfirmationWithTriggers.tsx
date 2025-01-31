import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ConfirmationWithTrigger } from "@/Constant";
import { ConfirmationWithTriggersData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const ConfirmationWithTriggers = () => {
  const handleClick = () => {
    SweetAlert.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#7A70BA",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor: "#7A70BA",
        });
      }
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ConfirmationWithTrigger} span={ConfirmationWithTriggersData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="secondary" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ConfirmationWithTriggers;
