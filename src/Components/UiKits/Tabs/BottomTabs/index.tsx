import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Botttomtab, Css, Href, ImagePath, JavaScripts, Vendor } from '@/Constant'
import { BottomTabsData } from '@/Data/Uikits/Tabs'
import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import BottomTabsContent from './BottomTabsContent'
import Image from 'next/image'

const BottomTabs = () => {
    const [basicTab, setBasicTab] = useState('2')
  return (
    <Col xxl='6' className='box-col-12'>
        <Card>
            <CommonUIkitsComponent title={Botttomtab} span={BottomTabsData} headClass='pb-0' spanClass='mt-1 mb-0'/>
             <CardBody>
                <div className='bg-navbar bottom-navbar'>
                    <BottomTabsContent basicTab={basicTab}/>
                    
                    <Nav pills color='primary'id="pills-bg-tab3" >
                        <NavItem>
                            <NavLink href={Href} className={`${basicTab === '1' ? 'active' :''}`} onClick={() => setBasicTab('1')}><Image src={`${ImagePath}/tree/html.png`} alt="" width={20} height={20} unoptimized/>{Css}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={`${basicTab === '2' ? 'active' :''}`} onClick={() => setBasicTab('2')}><Image src={`${ImagePath}/tree/vendor.png`} alt="" width={20} height={20} unoptimized/>{Vendor}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={`${basicTab === '3' ? 'active' :''}`} onClick={() => setBasicTab('3')}><Image src={`${ImagePath}/tree/js.png`} alt="" width={20} height={20} unoptimized/>{JavaScripts}</NavLink>
                        </NavItem>
                    </Nav>
                </div>
             </CardBody>
        </Card>
    </Col>
  )
}

export default BottomTabs
