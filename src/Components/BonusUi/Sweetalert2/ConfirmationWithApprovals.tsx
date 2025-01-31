import CommonCardHeader from "@/CommonComponent/CommonCardHeader";;
import { ClickIt, ConfirmationWithApproval } from "@/Constant";
import { ConfirmationWithApprovalsData } from "@/Data/BonusUi/Sweetalert2";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import SweetAlert from "sweetalert2";

const ConfirmationWithApprovals = () => {
  const handleClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      cancelButtonText: "No, cancel!",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      didRender: () => {
        const cancelButton = Swal.getCancelButton();
        if (cancelButton) {
          cancelButton.style.color = "#ffffff";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor: "#7A70BA",
        });
      } else if (result.isDismissed) {
        Swal.fire({
          icon: "error",
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          confirmButtonColor: "#61AE41",
        });
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ConfirmationWithApproval} span={ConfirmationWithApprovalsData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <Button color="primary" onClick={handleClick}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ConfirmationWithApprovals;
