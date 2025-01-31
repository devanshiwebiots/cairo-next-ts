import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, PasswordGeneratorAlerts } from "@/Constant";
import { PasswordGeneratorAlertData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const PasswordGeneratorAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "Enter your password", text: "Password", input: "password", confirmButtonColor: "#7A70BA", inputPlaceholder: "Enter your password" }).then((result) => {
      if (result.value) {
        SweetAlert.fire({ title: `Your password is : ${result.value}`, confirmButtonColor: "#7A70BA" });
      } else {
        SweetAlert.fire({ title: `Your password is : ${result.value}`, confirmButtonColor: "#7A70BA" });
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={PasswordGeneratorAlerts} span={PasswordGeneratorAlertData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="primary" className="sweet-13" onClick={displayAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PasswordGeneratorAlert;
