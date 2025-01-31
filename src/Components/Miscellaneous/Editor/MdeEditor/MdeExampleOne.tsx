import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { MdeEditorExample } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import SimpleMdeReact from "react-simplemde-editor";
import { MdeEditorText } from '@/Data/Editors';

const MdeExampleOne = () => {
  return (
   <Row>
    <Col sm='12'>
        <Card>
            <CommonCardHeader title={MdeEditorExample} headClass='pb-0'/>
            <CardBody>
            <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
            </CardBody>
        </Card>
    </Col>
   </Row>
  )
}

export default MdeExampleOne
