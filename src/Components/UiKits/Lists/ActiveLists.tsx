import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { ActiveListData, ActiveSpan, DefaultListData } from '@/Data/Uikits/Lists'
import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ActiveList } from '@/Constant'

const ActiveLists = () => {
  return (
    <Col xl='4' md='6'>
        <Card>
            <CommonUIkitsComponent title={ActiveList} span={ActiveSpan}  headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
          <ListGroup>
            <ListGroupItem className="active bg-warning-light"><i className="icofont icofont-arrow-right"></i>UI Kits</ListGroupItem>
            {ActiveListData.map((item, index) => (
            <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
          ))}
          </ListGroup>
        </CardBody>
        </Card>
    </Col>
  )
}

export default ActiveLists
