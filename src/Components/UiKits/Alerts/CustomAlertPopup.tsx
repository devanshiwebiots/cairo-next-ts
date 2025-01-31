import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import SVG from '@/CommonComponent/SVG'
import { CustomAlertPopups, Later, RightNow } from '@/Constant'
import { CustomAlertPopupSpan } from '@/Data/Uikits/Alerts'
import React, { useState } from 'react'
import { Alert, Button, Card, CardBody, Col } from 'reactstrap'

const CustomAlertPopup = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false)
  return (
     <Col xl='6'>
        <Card className='height-equal'>
            <CommonUIkitsComponent title={CustomAlertPopups} span={CustomAlertPopupSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='alert-box'>
                   <Alert className='justify-content-center p-0' fade isOpen={visible} toggle={onDismiss} color=''>
                    <div className='alert-body'>
                        <SVG iconId='alert-popup'/>
                        <h5 className='mb-1'>A Crucial Update is Now Available</h5>
                        <p>For improved security and functionality, install the most recent version right away.</p>
                        <div className='button-box'>
                            <button className='btn light-background'>{Later}</button>
                            <Button color='warning'>{RightNow}</Button>
                        </div>
                    </div>
                   </Alert>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default CustomAlertPopup
