import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { AdditionalContent } from '@/Constant'
import { AdditionalContentsData, AdditionalContentSpan } from '@/Data/Uikits/Alerts'
import React from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap'

const AdditionalContents = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={AdditionalContent} span={AdditionalContentSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='dark-alert'>
                {AdditionalContentsData.map(({color, title}, index) => (
                    <Alert color={`light-${color}`} key={index}>
                        <h5 className={`alert-heading pb-2 txt-${color}`}>{title}</h5>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <hr />
                      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </Alert>
                ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default AdditionalContents
