import { Categories } from '@/Constant'
import React, { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap'
import CommonLearningHeader from '../Common/CommonLearningHeader'
import DesignCategories from './DesignCategories'
import DevelopmentCategories from './DevelopmentCategories'

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
     <Col xl='12'>
       <Card>
        <CommonLearningHeader heading={Categories} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className='px-0'>
            <DesignCategories />
            <DevelopmentCategories />
          </CardBody>
        </Collapse>
       </Card>
     </Col>
  )
}

export default CategoriesCheckBoxes
