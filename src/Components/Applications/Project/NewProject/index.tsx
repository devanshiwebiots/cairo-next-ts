
import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import CreateNewProjectForm from './CreateNewProjectForm'

const NewProjectContainer = () => {
  return (
   <Container fluid>
     <Row>
        <Card>
            <CardBody>
                <CreateNewProjectForm />
            </CardBody>
        </Card>
     </Row>
   </Container>
  )
}

export default NewProjectContainer
