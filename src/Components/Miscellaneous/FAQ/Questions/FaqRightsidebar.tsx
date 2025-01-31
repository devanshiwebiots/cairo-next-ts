import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import AskQustions from './AskQustions'
import LatestUpdate from './LatestUpdate'
import SearchArticles from './SearchArticles'

const FaqRightsidebar = () => {
  return (
    <Col xxl='4' lg='6' md='5' className='xl-40'>
       <Row>
        <SearchArticles />
        <AskQustions />
        <LatestUpdate />
       </Row>
    </Col>
  )
}

export default FaqRightsidebar
