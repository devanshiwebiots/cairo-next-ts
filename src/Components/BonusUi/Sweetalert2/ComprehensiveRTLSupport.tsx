import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ComprehensiveRTLSupports } from "@/Constant";
import { ComprehensiveRTLSupportData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const ComprehensiveRTLSupport = () => {
  const handleClick = () => {
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
      didRender: () => {
        const icon = Swal.getIcon();
        if (icon) {
          icon.style.transform = "scaleX(-1)";
        }
      },
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card>
        <CommonCardHeader title={ComprehensiveRTLSupports} span={ComprehensiveRTLSupportData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button color="secondary" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComprehensiveRTLSupport;
