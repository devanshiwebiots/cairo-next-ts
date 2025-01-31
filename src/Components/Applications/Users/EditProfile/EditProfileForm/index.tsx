import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { EditProfile, UpdateProfile } from '@/Constant'
import React from 'react'
import { Button, Card, CardFooter, Col, Form } from 'reactstrap'
import EditProfileFormBody from './EditProfileFormBody'

const EditProfileForm = () => {
  return (
   <Col xl='8'>
     <Form onSubmit={(e) =>e.preventDefault()}>
        <Card>
            <CommonCardHeader title={EditProfile} headClass='pb-0'/>
            <EditProfileFormBody />
            <CardFooter className="text-end">
            <Button color="primary">{UpdateProfile}</Button>
          </CardFooter>
        </Card>
     </Form>
   </Col>
  )
}

export default EditProfileForm
