import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, ImagePath, ProfileScrollableTitle } from '@/Constant'
import { ProfileScroll, ProfileScrollList } from '@/Data/BonusUi/Scrollable'
import Image from 'next/image'
import React from 'react'
import ScrollBar from 'react-perfect-scrollbar'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const ProfileScrollable = () => {
  return (
     <Col xxl='4' md='6'>
        <Card>
            <CommonCardHeader title={ProfileScrollableTitle} span={ProfileScroll} spanClass='m-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <ScrollBar className="scroll-b-none" style={{ width: "100%", height: "300px" }}>
                    <ListGroup>
                        {ProfileScrollList.map(({text, src}, index) => (
                            <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
                                 <Image className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" width={40} height={40} unoptimized/>{text}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </ScrollBar>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ProfileScrollable
