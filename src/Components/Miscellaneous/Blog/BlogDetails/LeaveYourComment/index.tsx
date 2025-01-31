import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { LeaveYourComments } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import LeaveYourCommentBody from './LeaveYourCommentBody'

const LeaveYourComment = () => {
  return (
     <Col sm='12'>
        <Card className='blog-contact'>
            <CommonCardHeader title={LeaveYourComments} headClass='pb-0'/>
            <CardBody>
                <LeaveYourCommentBody />
            </CardBody>
        </Card>
     </Col>
  )
}

export default LeaveYourComment
