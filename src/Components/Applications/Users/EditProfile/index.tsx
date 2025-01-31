import React from 'react'
import { Container, Row } from 'reactstrap'
import AddProjectsAndUpload from './AddProjectsAndUpload'
import EditProfileForm from './EditProfileForm'
import MyProfile from './MyProfile'

const EditProfileContainer = () => {
  return (
    <Container fluid>
        <div className='edit-profile'>
            <Row>
                <MyProfile />
                <EditProfileForm />
                <AddProjectsAndUpload />
            </Row>
        </div>
    </Container>
  )
}

export default EditProfileContainer
