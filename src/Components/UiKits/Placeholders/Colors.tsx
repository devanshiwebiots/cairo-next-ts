import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Color } from '@/Constant'
import { ColorsData, ColorsSpan } from '@/Data/Uikits/Placeholder'
import React from 'react'
import { Card, CardBody, Col, Placeholder } from 'reactstrap'

const Colors = () => {
  return (
   <Col className='col-12'>
     <Card>
        <CommonUIkitsComponent title={Color} span={ColorsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className=' placeholder-glow'>
            {ColorsData.map(({color}, index) => (
                <Placeholder className={`col-12 bg-${color}`} key={index}/>
            ))}
        </CardBody>
     </Card>
   </Col>
  )
}

export default Colors
