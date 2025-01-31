import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Animations } from '@/Constant'
import { AnimationData, AnimationSpan } from '@/Data/Uikits/Placeholder'
import React from 'react'
import { Card, CardBody, Col, Placeholder } from 'reactstrap'

const Animation = () => {
  return (
    <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={Animations} span={AnimationSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='animation-placeholder'>
               {AnimationData.map((data, index) => (
                <p className={`placeholder-${data}`} key={index}>
                    <Placeholder className='col-12 placeholder-light'/>
                </p>
               ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default Animation
