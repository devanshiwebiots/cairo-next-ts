import { ClickIt, DateAlerts } from "@/Constant";
import { DateAlertData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import SweetAlert from "sweetalert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const DateAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "select departure date", input: "date", confirmButtonColor: "#7A70BA" }).then((result) => {
      if (result.value) {
        SweetAlert.fire({ title: `Your date is : ${result.value}`, confirmButtonColor: "#7A70BA" });
      } else {
        SweetAlert.fire({ title: `Your date is : ${result.value}`, confirmButtonColor: "#7A70BA" });
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={DateAlerts} span={DateAlertData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="danger" className="sweet-14" onClick={displayAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DateAlert;
