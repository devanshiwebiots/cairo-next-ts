import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { LeftborderAlerts } from "@/Constant";
import { LeftBorderAlertData, LeftBorderAlertSpan } from "@/Data/Uikits/Alerts";
import React, { useState } from "react";
import { Alert, Card, CardBody, Col } from "reactstrap";

const LeftBorderAlert = () => {
  const [visibleAlerts, setVisibleAlerts] = useState(Array(LeftBorderAlertData.length).fill(true));

  const onDismiss = (index: any) => {
    const updatedVisibility = [...visibleAlerts];
    updatedVisibility[index] = false;
    setVisibleAlerts(updatedVisibility);
  };

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonUIkitsComponent title={LeftborderAlerts} span={LeftBorderAlertSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="live-dark">
          {LeftBorderAlertData.map(
            ({ color, title, icon }, index) =>
              visibleAlerts[index] && (
                <Alert toggle={onDismiss} color={`light-${color}`} fade className={`txt-${color} border-left-${color}`} key={index}>
                  {icon}
                  <p className={`txt-${color}`}>{title}</p>
                  <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close" onClick={() => onDismiss(index)}></button>
                </Alert>
              )
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
