import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { NestingButton } from '@/Constant'
import { NestingData } from '@/Data/Buttons/ButtonGroup'
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicNesting from './DynamicNesting'
import { StaticNesting } from './StaticNesting'

const Nesting = () => {
  return (
    <Fragment>
     <Col lg='6'>
       <Card className='height-equal'>
        <CommonCardHeader title={NestingButton} span={NestingData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='btn-group-wrapper'>
          <StaticNesting />
          <DynamicNesting />
        </CardBody>
       </Card>
     </Col>
    </Fragment>
  )
}

export default Nesting
