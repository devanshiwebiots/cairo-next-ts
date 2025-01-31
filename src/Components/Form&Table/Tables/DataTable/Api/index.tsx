import React from 'react'
import { Container, Row } from 'reactstrap'
import AddRows from './AddRows'
import ChildRows from './ChildRows'
import CustomFiltering from './CustomFiltering'
import RowSelectionAndDeletion from './RowSelectionAndDeletion'

const ApiContainer = () => {
  return (
     <Container fluid>
        <Row>
            <AddRows />
            <ChildRows />
            <RowSelectionAndDeletion />
            <CustomFiltering />
        </Row>
     </Container>
  )
}

export default ApiContainer
