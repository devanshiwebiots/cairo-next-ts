import React from 'react'
import { Container, Row } from 'reactstrap'
import AjaxSourcedData from './AjaxSourcedData'
import HtmlSourcedData from './HtmlSourcedData'
import JavaScriptSourcedData from './JavaScriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing'

const DataSourcesContainer = () => {
  return (
   <Container fluid>
    <Row>
        <HtmlSourcedData />
        <AjaxSourcedData />
        <JavaScriptSourcedData />
        <ServerSideProcessing />
    </Row>
   </Container>
  )
}

export default DataSourcesContainer
