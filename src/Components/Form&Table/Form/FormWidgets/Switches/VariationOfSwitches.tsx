import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VariationOfSwitche } from '@/Constant'
import { VariationSwitchData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import VariationOfSwitcheOne from './VariationOfSwitcheOne'
import { VariationOfSwitcheTwo } from './VariationOfSwitcheTwo'

const VariationOfSwitches = () => {
  return (
  <Col md='6'>
    <Card>
        <CommonCardHeader title={VariationOfSwitche} span={VariationSwitchData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='common-flex'>
            <ul className='tg-list common-flex'>
                <VariationOfSwitcheOne />
                <VariationOfSwitcheTwo />
            </ul>
        </CardBody>
    </Card>
  </Col>
  )
}

export default VariationOfSwitches
