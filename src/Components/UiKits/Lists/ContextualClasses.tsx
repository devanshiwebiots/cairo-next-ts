import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ContextualClass, Href } from '@/Constant'
import { ContextualData, ContextualDataList } from '@/Data/Uikits/Lists'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const ContextualClasses = () => {
  return (
    <Col xl="6" sm="12" className="box-col-6">
    <Card className="height-equal">
      <CommonUIkitsComponent title={ContextualClass} span={ContextualData} spanClass='mt-1 mb-0' headClass='pb-0'/>
      <CardBody>
        <ListGroup>
        <ListGroupItem tag="a" href={Href} className="list-group-item-action list-light-primary">
            This is Primary bg you can use <em className="txt-primary fw-bold">.list-light-primary</em> class.
          </ListGroupItem>
          {ContextualDataList.map((item, index) => (
            <ListGroupItem tag="a" href={Href} className={`list-group-item-action list-light-${item}`} key={index}>
              This is <span className="text-capitalize">{item}</span> bg you can use <em className={`txt-${item} fw-bold`}>.list-light-{item}</em> class.
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  </Col>
  )
}

export default ContextualClasses
