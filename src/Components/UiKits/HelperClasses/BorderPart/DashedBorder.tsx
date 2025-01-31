import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Dashedborder } from '@/Constant'
import { DashedBorderData, DashedBorderSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const DashedBorder = () => {
  return (
    <Col xl='3'>
      <Card>
        <CommonUIkitsComponent title={Dashedborder} span={DashedBorderSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
          <div className='helper-common-box helper-p-wrapper'>
            {DashedBorderData.map((data,index) => (
              <div className={`border-common-box border-s-dashed b-width-${data}`} key={index}>b-width-{data}</div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DashedBorder
