import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Left, Middle, OutlineCustomButtonGroupTitle, Right } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Button, ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'

const OutlineCustomButtonGroup = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonCardHeader title={OutlineCustomButtonGroupTitle} headClass='pb-0'/>
        <CardBody className='btn-group-showcase'>
            <Row>
            {ButtonGroupData.map((item, index) => (
              <Col xl="4" md="6" sm="12" key={index}>
                <ButtonGroup className="btn-group-pill">
                  <Button outline color={item}>{Left}</Button>
                  <Button color={item}>{Middle}</Button>
                  <Button outline color={item}>{Right}</Button>
                </ButtonGroup>
              </Col>
            ))}
            </Row>
        </CardBody>
    </Card>
   </Col>
  )
}

export default OutlineCustomButtonGroup
