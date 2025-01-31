import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FollowUs } from '@/Constant'
import { FollowUsList } from '@/Data/Blog'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const FollowUsCard = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonCardHeader title={FollowUs} headClass='pb-0'/>
            <CardBody>
                <ul className='blog-follow'>
                    {FollowUsList.map(({icon, url}, index) => (
                        <li key={index}>
                            <Link href={url}>{icon}</Link>
                        </li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    </Col>
  )
}

export default FollowUsCard
