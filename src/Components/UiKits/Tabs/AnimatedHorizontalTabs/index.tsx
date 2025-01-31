import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { AboutUs, AnimatedHorizontalTab, FAQ, Gallery, Home, Profile } from '@/Constant'
import { AnimatedHorizontalTabsData } from '@/Data/Uikits/Tabs'
import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import AnimatedHorizontalTabsContent from './AnimatedHorizontalTabsContent'

const AnimatedHorizontalTabs = () => {
    const [basicTab, setBasicTab] = useState('2')
  return (
    <Col xxl='6' className='box-col-12'>
        <Card>
            <CommonUIkitsComponent title={AnimatedHorizontalTab} span={AnimatedHorizontalTabsData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='horizontal-icons-tab'>
             <Nav tabs className='border-tab mb-0' id="bottom-tab2">
                <NavItem>
                    <NavLink className={`tab-info ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}><i className="icofont icofont-building-alt"/><span>{Home}</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`tab-info ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}><i className="icofont icofont-building-alt"/><span>{Profile}</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`tab-info ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}><i className="icofont icofont-building-alt"/><span>{AboutUs}</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`tab-info ${basicTab === '4' ? 'active' : ''}`} onClick={() => setBasicTab('4')}><i className="icofont icofont-building-alt"/><span>{Gallery}</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`tab-info ${basicTab === '5' ? 'active' : ''}`} onClick={() => setBasicTab('5')}><i className="icofont icofont-building-alt"/><span>{FAQ}</span></NavLink>
                </NavItem>
             </Nav>
             <AnimatedHorizontalTabsContent basicTab={basicTab}/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default AnimatedHorizontalTabs
