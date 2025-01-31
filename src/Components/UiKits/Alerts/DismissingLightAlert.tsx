import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { DismingLightAlerts, Href } from '@/Constant'
import { DismissingLightAlertSpan } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bell, Heart } from 'react-feather'
import { Alert, Card, CardBody, Col } from 'reactstrap'

const DismissingLightAlert = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false)
  return (
    <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={DismingLightAlerts} span={DismissingLightAlertSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Alert isOpen={visible} toggle={onDismiss} className='mb-0' fade color="light-warning">
                    <Bell />
                    <p className="text-dark">The <Link className="alert-link txt-warning" href={Href}>"alert-light-warning" </Link>class can be used to create an alert like this one.</p>
                      <button className="btn-close" type="button" onClick={onDismiss}></button>
                </Alert>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DismissingLightAlert
