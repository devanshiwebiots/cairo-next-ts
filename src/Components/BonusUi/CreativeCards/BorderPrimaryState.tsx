import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BorderPrimaryStates, ImagePath } from '@/Constant'
import { BorderPrimaryStateData, BorderPrimaryStateList } from '@/Data/BonusUi/CreativeCards'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const BorderPrimaryState = () => {
  return (
    <Col xxl='4' md='6'>
        <Card className='common-hover'>
            <CommonCardHeader title={BorderPrimaryStates} span={BorderPrimaryStateData} spanClass='mt-1 mb-0' headClass='pb-0 border-l-primary border-3'/>
            <CardBody>
                <ListGroup>
                    {BorderPrimaryStateList.map(({src, active, name}, index) => (
                        <ListGroupItem key={index} className={`list-group-item-action ${active ? 'active' : ''}`}>
                            <Image src={`${ImagePath}/${src}`} className='rounded-circle' alt='' width={40} height={40} unoptimized/>{name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BorderPrimaryState
