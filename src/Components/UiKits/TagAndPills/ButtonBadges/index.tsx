import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ButtonBadgesCart } from '@/Constant'
import { ButtonBadgesSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ButtonBadgesBody from './ButtonBadgesBody'

const ButtonBadges = () => {
  return (
     <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={ButtonBadgesCart} span={ButtonBadgesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <ButtonBadgesBody />
            </CardBody>
        </Card>
     </Col>
  )
}

export default ButtonBadges
