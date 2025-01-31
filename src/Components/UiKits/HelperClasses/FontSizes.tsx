import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { FontSizee } from '@/Constant'
import { FontSizesData, FontSizesSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FontSizes = () => {
  return (
    <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={FontSizee} span={FontSizesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='gradient-border'>
                    {FontSizesData.map((data,index) => (
                        <div className='font-wrapper border' key={index}>
                            <div className={`f-${data}`}>Font-size f-{data}</div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default FontSizes
