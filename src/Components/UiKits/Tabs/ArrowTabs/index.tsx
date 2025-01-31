import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { AccountInfos, Arrowtab, Href, Installments, Portfolios, Skill } from '@/Constant'
import { ArrowTabsData } from '@/Data/Uikits/Tabs'
import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import ArrowTabsContent from './ArrowTabsContent'

const ArrowTabs = () => {
    const [basicTab, setBasicTab] = useState('4')
  return (
     <Col xxl='6'>
        <Card>
            <CommonUIkitsComponent title={Arrowtab} span={ArrowTabsData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
              <div className='bg-navbar arrow-tabs'>
                <Nav pills className='mb-3' id="pills-bg-tab2">
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '1' ? 'active' : ''}`}  onClick={() => setBasicTab("1")}>{AccountInfos}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '2' ? 'active' : ''}`}  onClick={() => setBasicTab("2")}>{Portfolios}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '3' ? 'active' : ''}`}  onClick={() => setBasicTab("3")}>{Skill}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Href} className={`${basicTab === '4' ? 'active' : ''}`}  onClick={() => setBasicTab("4")}>{Installments}</NavLink>
                    </NavItem>
                </Nav>
              </div>
              <ArrowTabsContent basicTab={basicTab}/>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ArrowTabs
