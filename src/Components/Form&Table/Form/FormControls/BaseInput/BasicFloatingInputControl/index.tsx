import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicFloatingInputControls } from '@/Constant'
import { FloatingInputData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, Col, Form } from 'reactstrap'
import { BasicFloatingCardBody } from './BasicFloatingCardBody'
import { BasicFloatingFooter } from './BasicFloatingFooter'
const BasicFloatingInputControl = () => {
  return (
    <Col xl='6'>
        <Card className='height-equal'>
            <CommonCardHeader title={BasicFloatingInputControls} span={FloatingInputData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <Form className='theme-form' onSubmit={(e) => e.preventDefault()}>
                <BasicFloatingCardBody />
                <BasicFloatingFooter />
            </Form>
        </Card>
    </Col>
  )
}

export default BasicFloatingInputControl
