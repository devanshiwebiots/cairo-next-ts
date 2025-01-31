import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { MessageToast } from '@/Constant';
import { MessageToastsData } from '@/Data/BonusUi/Toast';
import React, { useState } from 'react';
import { Card, CardBody, Col, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { CheckSquare, Feather } from 'react-feather';
import SuccessToast from './SuccessToast';
import WarningToast from './WarningToasts';
import ErrorToast from './ErrorToast';

const MessageToasts = () => {

  return (
    <Col className='col-12'>
      <Card>
        <CommonCardHeader title={MessageToast} span={MessageToastsData} spanClass='mt-1 mb-0' headClass='pb-0' />
        <CardBody className='common-flex common-toasts'>
          <SuccessToast />
          <WarningToast />
          <ErrorToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MessageToasts;
