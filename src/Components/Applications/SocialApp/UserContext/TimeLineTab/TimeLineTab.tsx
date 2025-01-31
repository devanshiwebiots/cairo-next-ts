import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftBar from '../../common/LeftBar'
import RightBar from '../../common/RightBar'
import NewUser1 from './NewUser1/NewUser1'
import NewUser2 from './NewUser2/NewUser2'

const TimeLineTab = () => {
  return (
    <Row>
        <Col md='5' xl='3' className='box-col-4 xl-40'>
            <div className='default-according style-1 faq-accordion'>
                <LeftBar />
            </div>
        </Col>
        <Col md='7' xl='6' className='box-col-8e xl-60'>
          <Row>
            <NewUser1 />
            <NewUser2 />
          </Row>
        </Col>
        <Col xl='3' className='box-col-12 xl-100'>
          <div className='default-according style-1 faq-accordion job-accordion'>
            <RightBar />
          </div>
        </Col>
    </Row>
  )
}

export default TimeLineTab
