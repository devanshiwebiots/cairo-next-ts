import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { StudentValidationFormHeading } from '@/Constant'
import { StudentValidationData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import StudentValidationFormCardBody from './StudentValidationFormCardBody'

const StudentValidationForm = () => {
  return (
   <Col xl='6'>
    <Card className='height-equal'>
        <CommonCardHeader title={StudentValidationFormHeading} span={StudentValidationData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='custom-input'>
            <StudentValidationFormCardBody />
        </CardBody>
    </Card>
   </Col>
  )
}

export default StudentValidationForm
