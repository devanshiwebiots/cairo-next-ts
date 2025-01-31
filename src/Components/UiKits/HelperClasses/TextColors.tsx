import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { textColor } from '@/Constant'
import { TextColorsDataa, TextColorsSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColors = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonUIkitsComponent title={textColor} span={TextColorsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='txt-space'>
                {TextColorsDataa.map((data,index) => (
                    <div className={`font-${data}`} key={index}>This is a <strong>font-{data} </strong>text used class as font-{data}</div>
                ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default TextColors
