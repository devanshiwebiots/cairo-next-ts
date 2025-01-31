import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CourseFilter from '../LearningList/CourseFilter'
import BlogSingle from './BlogSingle'

const DetailCourseContainer = () => {
  return (
     <Container fluid>
        <Row className='learning-block'>
            <Col xl='9' className='xl-60 order-xl-0 order-1 box-col-12'>
                <BlogSingle />
            </Col>
            <Col xl="3" className="xl-40 box-col-12 learning-filter">
          <CourseFilter />
        </Col>
        </Row>
     </Container>
  )
}

export default DetailCourseContainer
