import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, PositionBottomEnds, PositionTopStarts } from "@/Constant";
import { PositionBottomEndData, PositionTopStartData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const PositionBottomEnd = () => {
  const handleClick = () => {
    Swal.fire({
      position: 'bottom-end', 
      icon: 'success',
      title: 'Signed in Successfully',
      showConfirmButton: false,
      timer: 3000, 
      toast: true, 
      timerProgressBar: true,
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={PositionBottomEnds} span={PositionBottomEndData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button className=" sweet-16" color="primary" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PositionBottomEnd;
