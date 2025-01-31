import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { FontStyles } from '@/Constant'
import { FontStyleData, FontStyleSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontStyle = () => {
  return (
   <Col xl='6'>
     <Card className='height-equal' style={{minHeight:' 463.594px'}}>
        <CommonUIkitsComponent title={FontStyles} span={FontStyleSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
           {FontStyleData.map((data,index) => (
            <p className={`${data}`} key={index}>This is a <strong>{data}</strong>font-style</p>
           ))}
        </CardBody>
     </Card>
   </Col>
  )
}

export default FontStyle
