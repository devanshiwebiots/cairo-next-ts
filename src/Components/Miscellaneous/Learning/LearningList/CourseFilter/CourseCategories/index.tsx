import { FilterHeading, FindCourse } from '@/Constant'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import CommonLearningHeader from '../Common/CommonLearningHeader'
import CategoriesCheckBox from './CategoriesCheckBox'
import DurationCheckBox from './DurationCheckBox'
import PriceRadioBox from './PriceRadioBox'
import SearchInput from './SearchInput'
import StatusCheckBox from './StatusCheckBox'

const CourseCategories = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Col xl='12'>
     <Card>
        <CommonLearningHeader heading={FindCourse} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
            <CardBody className='filter-cards-view animate-chk'>
                <SearchInput />
                <CategoriesCheckBox />
                <DurationCheckBox />
                <PriceRadioBox />
                <StatusCheckBox />
                <Button color='primary' className='text-center'>{FilterHeading}</Button>
            </CardBody>
        </Collapse>
     </Card>
   </Col>
  )
}

export default CourseCategories
