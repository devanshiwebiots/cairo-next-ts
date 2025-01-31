import React from 'react'
import { Container, Row } from 'reactstrap'
import ClipboardOnParagraph from './ClipboardOnParagraph'
import ClipboardOnTextarea from './ClipboardOnTextarea'
import ClipboardOnTextInput from './ClipboardOnTextInput'
import CopyPortionFromParagraph from './CopyPortionFromParagraph'

const ClipBoardContainer = () => {
  return (
    <Container fluid>
        <Row>
            <ClipboardOnTextInput />
            <ClipboardOnTextarea />
            <ClipboardOnParagraph />
            <CopyPortionFromParagraph />
        </Row>
    </Container>
  )
}

export default ClipBoardContainer
