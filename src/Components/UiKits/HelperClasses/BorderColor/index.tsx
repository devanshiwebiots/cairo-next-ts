import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BorderdColor } from '@/Constant'
import { BorderColorDataa, BorderColorSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BorderColor = () => {
  return (
     <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={BorderdColor} span={BorderColorSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='gradient-border'>
                    {BorderColorDataa.map((data,index) => (
                        <div className='helper-common-box' key={index}>
                            <div className={`helper-box ${data} border fill-wrapper`}></div><span>{data}</span>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default BorderColor
