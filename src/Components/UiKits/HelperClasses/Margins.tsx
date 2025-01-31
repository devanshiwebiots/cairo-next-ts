import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Margin } from '@/Constant'
import { MarginSpan, OneSidePaddingData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const Margins = () => {
  return (
    <Col xl='12'>
        <Card>
            <CommonUIkitsComponent title={Margin} span={MarginSpan} spanClass='mb-0 mt-1' headClass='pb-0'/>
            <CardBody>
                <div className='gradient-border'>
                    {OneSidePaddingData.map((data,index) => (
                        <div className={`helper-common-box gap-0 mb-0`} key={index}>
                            <div className={`helper-box m-${data} border bg-light`}></div><span>m-{data}</span>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default Margins
