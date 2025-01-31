import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DefaultToasts, ImagePath } from '@/Constant';
import { DefaultToastData } from '@/Data/BonusUi/Toast';
import Image from 'next/image';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Toast, ToastBody } from 'reactstrap';

const DefaultToast = () => {
    const [open, setOpen] = useState(true);
  return (
    <Col md="6">
    <Card className="height-equal">
      <CommonCardHeader title={DefaultToasts} span={DefaultToastData} spanClass='mt-1 mb-0' headClass='pb-0'/>
      <CardBody className="toast-rtl">
        <Toast className="default-show-toast" isOpen={open}>
          <div className="toast-header toast-img">
            <Image className="rounded me-2" src={`${ImagePath}/product-lists/profile.png`} alt="profile" width={30} height={30}/>
            <strong className="me-auto">Cairo theme</strong>
            <small className="d-sm-block d-none">10 min ago</small>
            <Button close className="p-0" onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark"><strong className="txt-success">Well done!</strong> You successfully read this important message.</ToastBody>
        </Toast>
      </CardBody>
    </Card>
  </Col>
  )
}

export default DefaultToast
