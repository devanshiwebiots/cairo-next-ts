import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Horizontaldasheddivider } from '@/Constant'
import { HorizontalDashedDividerData, HorizontalDashedDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const HorizontalDashedDivider = () => {
  return (
    <Col xxl='4' md='6' className='box-col-6'>
        <Card>
            <CommonUIkitsComponent title={Horizontaldasheddivider} span={HorizontalDashedDividerSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='main-divider'>
                {HorizontalDashedDividerData.map((data, i) => (
                    <div className={`divider-body divider-body-2 ${data.className} divider-${data.color}`} key={i}>
                        <div className={`divider-circle bg-light-${data.color}`}>
                            <i className={data.icon}/>
                        </div>
                    </div>
                ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default HorizontalDashedDivider
