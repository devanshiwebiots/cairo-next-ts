import { LatestArticles } from '@/Constant'
import React from 'react'
import { Col, Row } from 'reactstrap'
import ArticalAndVideo1 from './ArticalAndVideo1'
import ArticalAndVideo2 from './ArticalAndVideo2'
import ArticalAndVideo3 from './ArticalAndVideo3'

const ArticlesAndVideos = () => {
  return (
    <Col lg='12'>
        <div className='header-faq'>
            <h4 className='mb-0'>{LatestArticles}</h4>
        </div>
        <Row className='latest-articles'>
            <ArticalAndVideo1 />
            <ArticalAndVideo2 />
            <ArticalAndVideo3 />
        </Row>
    </Col>
  )
}

export default ArticlesAndVideos
