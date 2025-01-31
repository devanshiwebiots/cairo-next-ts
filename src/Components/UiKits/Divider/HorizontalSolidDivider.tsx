import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Horizontalsoliddivider } from '@/Constant'
import { HorizontalSolidDividerData, HorizontalSolidDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const HorizontalSolidDivider = () => {
  return (
     <Col xxl='4' md='6' className='box-col-6'>
        <Card>
            <CommonUIkitsComponent title={Horizontalsoliddivider} span={HorizontalSolidDividerSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='main-divider'>
                {HorizontalSolidDividerData.map((data, i) => (
                     <div className={`divider-body divider-body-1 ${data.className} divider-${data.color}`} key={i}>
                        <div className={`divider-p-${data.color}`}><i className={data.icon}/>
                         <span className={`txt-${data.color}`}>{data.title}</span>
                        </div>
                     </div>
                ))}
            </CardBody>
        </Card>
     </Col>
  )
}

export default HorizontalSolidDivider
