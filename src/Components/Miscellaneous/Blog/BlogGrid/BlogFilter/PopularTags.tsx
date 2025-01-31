import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, PopularTag } from '@/Constant'
import { PopularTagsList } from '@/Data/Blog'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const PopularTags = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonCardHeader title={PopularTag} headClass='pb-0'/>
            <CardBody>
                <ul className='tags'>
                    {PopularTagsList.map((item,index) => (
                        <li key={index}>
                            <Link href={Href}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    </Col>
  )
}

export default PopularTags
