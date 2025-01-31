import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, RecentPost } from '@/Constant'
import { RecentPostsList } from '@/Data/Blog'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const RecentPosts = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonCardHeader title={RecentPost} headClass='pb-0'/>
        <CardBody>
            <ul className='recent-blog'>
                {RecentPostsList.map(({src, title, time}, index) => (
                    <li key={index}>
                        <div className='d-flex gap-2 align-items-start'>
                            <RatioImage src={`${ImagePath}/blog/${src}`} className='img-fluid rounded'/>
                            <div className='flex-grow-1'>
                                <h6>{title}</h6>
                                <p>{time}</p>
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

export default RecentPosts
