import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BorderSecondaryStates } from '@/Constant'
import { BorderSecondaryStateData, BorderSecondaryStateList } from '@/Data/BonusUi/CreativeCards'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const BorderSecondaryState = () => {
  return (
    <Col xxl='4' className='col-12'>
        <Card className='common-hover'>
            <CommonCardHeader title={BorderSecondaryStates} span={BorderSecondaryStateData} spanClass='mt-1 mb-0' headClass='pb-0  border-l-secondary border-3 '/>
            <CardBody className=''>
                <ListGroup className='list-group-numbered scroll-rtl'>
                  {BorderSecondaryStateList.map(({color, badgeName, name, TextColor}, index) => (
                    <ListGroupItem key={index} className='d-flex align-items-start flex-wrap'>
                        <div className='ms-2 me-auto'>{name}</div>
                        <span className={`badge bg-${color} ${TextColor} rounded-pill p-2`}>{badgeName}</span>
                    </ListGroupItem>
                  ))}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BorderSecondaryState
