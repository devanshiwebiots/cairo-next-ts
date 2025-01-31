import { useAppDispatch } from '@/Redux/Hooks'
import { fetchContactApiData } from '@/Redux/Reducers/ContactSlice';
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import ContactSideBar from './ContactSideBar';
import TabComponent from './TabContact/TabComponent';

const ContactsContainer = () => {
    const [activeTab, setActiveTab] = useState('1')
    const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(fetchContactApiData())
   },[dispatch])

   const callback = useCallback((tab: string) => {
    setActiveTab(tab)
   },[])

  return (
    <Container fluid>
        <div className='email-wrap bookmark-wrap'>
            <Row>
                <Col xl='3' md='12' className='box-col-12'>
                    <ContactSideBar callback={callback}/>
                </Col>
                <Col xl='9' md='12' className='box-col-12'>
                    <TabComponent activeTab={activeTab}/>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default ContactsContainer
