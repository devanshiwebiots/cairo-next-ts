import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Disable } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DisabledForm from './DisabledForm'

const Disabled = () => {
  return (
     <Col lg='6'>
        <Card>
            <CommonCardHeader title={Disable} headClass='pb-0'/>
            <CardBody>
                <DisabledForm />
            </CardBody>
        </Card>
     </Col>
  )
}

export default Disabled
