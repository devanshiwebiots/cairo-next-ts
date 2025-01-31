import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, ImNotSure, RemoveMyAccount, UniqueToasts, YourAccountWillBePermanentlyDeleted } from '@/Constant';
import { UniqueToastData } from '@/Data/BonusUi/Toast';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Card, CardBody, Col, Toast, ToastBody } from 'reactstrap';

const UniqueToast = () => {
    const [open, setOpen] = useState(true);
  return (
    <Col md="6">
    <Card className="height-equal">
      <CommonCardHeader title={UniqueToasts} span={UniqueToastData} headClass='pb-0' spanClass='mt-1 mb-0'/>
      <CardBody className="toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <Image className="rounded me-2" src={`${ImagePath}/product-lists/profile.png`} alt="profile" width={30} height={30}/>
            <strong className="me-auto">Cairo theme</strong>
            <Button close className="p-0" onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">
            <h6 className="mb-2">{YourAccountWillBePermanentlyDeleted}</h6>
            <p className="mb-0">Do you intend to continue?</p>
            <div className="mt-2 pt-2 border-top d-flex gap-2">
              <Button color="dark" size="sm">{ImNotSure}</Button>
              <Button color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Button>
            </div>
          </ToastBody>
        </Toast>
      </CardBody>
    </Card>
  </Col>
  )
}

export default UniqueToast
