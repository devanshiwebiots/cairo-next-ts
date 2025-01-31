import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClickIt, DismissAlerts } from '@/Constant';
import { DismissAlertData } from '@/Data/BonusUi/Sweetalert2';
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';

const DismissAlert = () => {
    const handleClick = () => {
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Okay",
          footer: '<a href="/your-link" style="color: #007bff;">Why do I have this issue?</a>',
        });
      };
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-4">
    <Card className="height-equal">
      <CommonCardHeader title={DismissAlerts} span={DismissAlertData} spanClass="mt-1 mb-0" headClass="pb-0" />
      <CardBody>
        <Button color='success' className='sweet-3' onClick={handleClick}>
        {ClickIt}
        </Button>
      </CardBody>
    </Card>
  </Col>
  )
}

export default DismissAlert
