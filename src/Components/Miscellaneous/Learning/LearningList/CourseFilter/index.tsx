import { LearningFilter } from '@/Constant'
import React, { useState } from 'react'
import { Button, Row } from 'reactstrap'
import CategoriesCheckBoxes from './Categories'
import CourseCategories from './CourseCategories'
import UpcomingCourses from './UpcomingCourses'

const CourseFilter = () => {
    const [filter,setFilter]= useState(false)
  return (
    <div className='md-sidebar'>
      <Button color='primary' onClick={() => setFilter(!filter)} className='email-aside-toggle md-sidebar-toggle'>{LearningFilter}</Button>
      <div className={`md-sidebar-aside job-sidebar ${filter ? 'open' : ''}`}>
        <div className='default-according style-1 faq-accordion job-accordion' id='accordionoc'>
            <Row>
                <CourseCategories />
                <CategoriesCheckBoxes />
                <UpcomingCourses />
            </Row>
        </div>
      </div>
    </div>
  )
}

export default CourseFilter
