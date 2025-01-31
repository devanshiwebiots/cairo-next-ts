import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Grooveborder } from '@/Constant'
import { DashedBorderData, GrooveBorderSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const GrooveBorder = () => {
  return (
     <Col xl='3'>
        <Card>
            <CommonUIkitsComponent title={Grooveborder} span={GrooveBorderSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <div className='helper-common-box helper-p-wrapper'>
                    {DashedBorderData.map((data, i) => (
                        <div className={`border-common-box border-s-groove b-width-${data}`} key={i}>b-width-{data}</div>
                    ))}
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default GrooveBorder
