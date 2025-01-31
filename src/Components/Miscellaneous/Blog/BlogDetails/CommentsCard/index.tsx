import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Comments } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommentsCardBody from './CommentsCardBody'

const CommentsCard = () => {
  return (
   <Col sm='12'>
    <Card className='blog-comment'>
        <CommonCardHeader title={Comments} headClass='pb-0'/>
        <CardBody>
            <CommentsCardBody />
        </CardBody>
    </Card>
   </Col>
  )
}

export default CommentsCard
