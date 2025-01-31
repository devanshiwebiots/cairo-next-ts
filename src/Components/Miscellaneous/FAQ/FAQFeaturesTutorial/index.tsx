import { FeaturedTutorials } from '@/Constant'
import React from 'react'
import { Col } from 'reactstrap'
import FaqFeaturesTutorial from './FaqFeaturesTutorial'

const FAQFeaturesTutorial = () => {
  return (
     <Col lg='12' >
        <div className='"header-faq' style={{marginBottom:'30px'}}>
            <h4 className='mb-0'>{FeaturedTutorials}</h4>
        </div>
        <FaqFeaturesTutorial />
     </Col>
  )
}

export default FAQFeaturesTutorial
