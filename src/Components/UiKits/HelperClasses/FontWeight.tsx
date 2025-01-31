import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { FontWeights } from '@/Constant'
import { FontWeightData, FontWeightSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontWeight = () => {
  return (
   <Col xl='6'>
    <Card>
        <CommonUIkitsComponent title={FontWeights} span={FontWeightSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            {FontWeightData.map((data,index) => (
                <div className='helper-common-box' key={index}>
                    <div className={`f-w-${data.size}`}>{data.title}-{data.size}</div>
                </div>
            ))}
        </CardBody>
    </Card>
   </Col>
  )
}

export default FontWeight
