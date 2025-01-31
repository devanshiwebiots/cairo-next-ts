import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { TrendingPost } from '@/Constant'
import { TrendingPostsList } from '@/Data/Blog'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TrendingPosts = () => {
  return (
   <Col sm='12'>
     <Card>
        <CommonCardHeader title={TrendingPost} headClass='pb-0'/>
        <CardBody>
            <ul className='recent-blog trending-blog'>
                {TrendingPostsList.map(({name, date, id}, index) => (
                    <li key={index}>
                        <div className='d-flex gap-2 align-items-start'>
                            <h5>{id}.</h5>
                            <div className='flex-grow-1'>
                                <h6>{name}</h6>
                                <p>{date}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </CardBody>
     </Card>
   </Col>
  )
}

export default TrendingPosts
