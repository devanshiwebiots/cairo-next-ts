import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { DismingDarkAlerts, Href } from '@/Constant';
import { DismissingLightAlertSpan } from '@/Data/Uikits/Alerts';
import Link from 'next/link';
import React, { useState } from 'react'
import { Heart } from 'react-feather';
import { Alert, Card, CardBody, Col } from 'reactstrap';

const DismissingDarkAlert = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false)
  return (
    <Col sm='12' xl='6'>
    <Card>
        <CommonUIkitsComponent title={DismingDarkAlerts} span={DismissingLightAlertSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <Alert isOpen={visible} toggle={onDismiss} className='mb-0' fade color="secondary">
                <Heart />
                <p className="text-light">The <Link className="alert-link txt-light" href={Href}>"alert-light-warning" </Link>class can be used to create an alert like this one.</p>
                  <button className="btn-close" type="button" onClick={onDismiss}></button>
            </Alert>
        </CardBody>
    </Card>
</Col>
  )
}

export default DismissingDarkAlert
