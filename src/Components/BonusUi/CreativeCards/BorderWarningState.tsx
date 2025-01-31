import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BorderWarningStates } from '@/Constant'
import { BorderWarningStateData, BorderWarningStateList } from '@/Data/BonusUi/CreativeCards'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const BorderWarningState = () => {
  return (
   <Col xxl='4' md='6'>
    <Card className='common-hover'>
        <CommonCardHeader title={BorderWarningStates} span={BorderWarningStateData} spanClass='mt-1 mb-0' headClass='pb-0 border-l-warning border-3'/>
        <CardBody>
            <ListGroup className='list-group-numbered'>
                {BorderWarningStateList.map(({title, color},index) => (
                    <ListGroupItem key={index} className={`txt-${color} f-w-500`}>{title}</ListGroupItem>
                ))}
            </ListGroup>
        </CardBody>
    </Card>
   </Col>
  )
}

export default BorderWarningState
