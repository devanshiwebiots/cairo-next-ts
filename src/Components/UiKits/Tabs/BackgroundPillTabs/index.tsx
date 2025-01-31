import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BackgroundPillTab, Chair, Href, sofa, Table } from '@/Constant'
import { BackgroundPillTabsaData } from '@/Data/Uikits/Tabs'
import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import BackgroundPillContent from './BackgroundPillContent'

const BackgroundPillTabs = () => {
    const [basicTab, setBasicTab] = useState("3");
  return (
   <Col xxl='6'>
    <Card>
        <CommonUIkitsComponent title={BackgroundPillTab} span={BackgroundPillTabsaData} headClass='pb-0' spanClass='mt-1 mb-0' />
         <CardBody>
            <div className='bg-navbar'>
                <Nav pills color='primary' id="pills-bg-tab">
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab("1")}>{sofa}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab("2")}>{Chair}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab("3")}>{Table}</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <BackgroundPillContent basicTab={basicTab}/>
         </CardBody>
    </Card>
   </Col>
  )
}

export default BackgroundPillTabs
