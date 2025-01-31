import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { Components, Home, Href, PageTab, Settings, VerticalTab } from '@/Constant';
import { VerticalTabData } from '@/Data/Uikits/Tabs';
import React, { useState } from 'react'
import { Badge, Card, CardBody, Col, Nav, NavLink, Row } from 'reactstrap';
import { VerticalTabContent } from './VerticalTabContent';

const VerticalTabs = () => {
    const [basicTab, setBasicTab] = useState("1");
  return (
   <Col sm='12' xxl='6'>
     <Card className='height-equal' style={{minHeight:'322.984px'}}>
        <CommonUIkitsComponent title={VerticalTab} span={VerticalTabData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <Row>
            <Col md="4" xs="12">
              <Nav pills className="flex-column nav-success">
                <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>{Home}</NavLink>
                <NavLink hre={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>{Components}</NavLink>
                <NavLink hre={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>{PageTab} <Badge color='light' className='text-dark'>3</Badge></NavLink>
                <NavLink hre={Href} className={basicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>{Settings}</NavLink>
              </Nav>
            </Col>
            <VerticalTabContent basicTab={basicTab}/>
            </Row>
        </CardBody>
     </Card>
   </Col>
  )
}

export default VerticalTabs
