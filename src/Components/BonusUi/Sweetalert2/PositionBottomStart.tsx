import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClickIt, PositionBottomStarts } from '@/Constant';
import { PositionBottomStartData } from '@/Data/BonusUi/Sweetalert2';
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';

const PositionBottomStart = () => {
    const handleClick = () => {
        Swal.fire({
          position: 'bottom-start', 
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
      <CommonCardHeader title={PositionBottomStarts} span={PositionBottomStartData} headClass="pb-0" spanClass="mt-1 mb-0" />
      <CardBody>
        <Button className="sweet-16" color='warning' onClick={handleClick}>
          {ClickIt}
        </Button>
      </CardBody>
    </Card>
  </Col>
  )
}

export default PositionBottomStart
