import { QuickQuestions } from '@/Constant'
import { FaqQueastionData } from '@/Data/FAQ'
import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import AccordionCard from '../Common/AccordionCard'
import FaqRightsidebar from './FaqRightsidebar'

const Questions = () => {
  return (
     <Col lg='12'>
      <div className='header-faq'>
        <h4 className='mb-0'>{QuickQuestions}</h4>
      </div>
      <Row className='default-according style-1 faq-accordion'>
         <Col xl='8' lg='6' md='7' className='xl-60'>
          {FaqQueastionData.map((data, index) => (
            <Fragment key={index}>
              {data.subTitle && (
                <div className='faq-title'>
                  <h5>{data.subTitle}</h5>
                </div>
              )}
             {data.titles.map((item, id) => (
                <AccordionCard key={id} item={item} />
              ))}
            </Fragment>
          ))}
         </Col>
         <FaqRightsidebar />
      </Row>
     </Col>
  )
}

export default Questions
