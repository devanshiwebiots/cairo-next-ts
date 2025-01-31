import React from 'react'
import { Container, Row } from 'reactstrap'
import FirstData from '../FirstData'
import UserData from './UserData'

const UserProfileContainer = () => {
  return (
    <Container fluid>
        <div className='user-profile'>
            <Row>
                <UserData />
                <FirstData />
            </Row>
        </div>
    </Container>
  )
}

export default UserProfileContainer
