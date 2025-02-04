import { Href, Views } from '@/Constant'
import { SideBarData } from '@/Data/Contact'
import { ContactNavPropsType } from '@/Types/ContactType'
import React, { useState } from 'react'
import { Nav, NavItem } from 'reactstrap'
import CategoryCreate from './CategoryCreate'
import CreateContact from './CreateContact'

const NavComponent: React.FC<ContactNavPropsType> = ({callbackActive}) => {
    const [activeTab, setActiveTab] = useState('1')

    const handleTab = (value: string) => {
        setActiveTab(value);
        callbackActive(value)
    }
  return (
   <Nav className='main-menu custom-scrollbar contact-options' role={'tablist'}>
    <NavItem>
        <CreateContact />
    </NavItem>
    <NavItem>
        <span className='main-title'>{Views}</span>
    </NavItem>
    <NavItem>
        <a href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => { setActiveTab("1"); callbackActive("1")}}>
            <span className='title'>Personal</span>
        </a>
    </NavItem>
    <NavItem><CategoryCreate /></NavItem>
    {SideBarData.map((data, i) => (
        <NavItem key={i}>
            <a href={Href} className={activeTab === data.value ? "active" : ""} onClick={() => handleTab(data.value)}>
                <span className='title'>{data.tittle}</span>
            </a>
        </NavItem>
    ))}
   </Nav>
  )
}

export default NavComponent
