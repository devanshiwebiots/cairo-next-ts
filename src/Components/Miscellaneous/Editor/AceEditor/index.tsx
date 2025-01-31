import React from 'react'
import { Container, Row } from 'reactstrap'
import CssMode from './CssMode'
import HtmlMode from './HtmlMode'
import JavaMode from './JavaMode'
import JavascriptMode from './JavascriptMode'

const AceEditorContainer = () => {
  return (
     <Container fluid>
        <Row>
            <JavascriptMode />
            <HtmlMode />
            <CssMode />
            <JavaMode />
        </Row>
     </Container>
  )
}

export default AceEditorContainer
