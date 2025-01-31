import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Dottedborder } from '@/Constant'
import { DashedBorderData, DottedBorderSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const DottedBorder = () => {
  return (
    <Col xl='3'>
        <Card>
            <CommonUIkitsComponent title={Dottedborder} span={DottedBorderSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='helper-common-box helper-p-wrapper'>
                    {DashedBorderData.map((data,index) => (
                        <div className={`border-common-box border-s-dotted b-width-${data}`} key={index}>b-width-{data}</div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DottedBorder
