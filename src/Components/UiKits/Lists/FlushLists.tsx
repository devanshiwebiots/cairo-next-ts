import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { FlushList } from '@/Constant'
import { FlushData, FlushListData } from '@/Data/Uikits/Lists'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const FlushLists = () => {
  return (
   <Col xl='4' md='12'>
    <Card>
        <CommonUIkitsComponent title={FlushList} span={FlushData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
          <ListGroup flush>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>PRODUCT</ListGroupItem>
            {FlushListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
    </Card>
   </Col>
  )
}

export default FlushLists
