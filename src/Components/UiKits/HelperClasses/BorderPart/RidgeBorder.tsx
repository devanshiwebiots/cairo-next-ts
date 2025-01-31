import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Ridgeborder } from '@/Constant'
import { DashedBorderData, RidgeborderSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const RidgeBorder = () => {
  return (
    <Col xl='3'>
        <Card>
            <CommonUIkitsComponent title={Ridgeborder} span={RidgeborderSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='helper-common-box helper-p-wrapper'>
                    {DashedBorderData.map((data,index) => (
                        <div className={`border-common-box border-s-inset b-width-${data}`} key={index}>b-width-{data}</div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default RidgeBorder
