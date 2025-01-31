import { AddTitleOfCards, Href } from '@/Constant'
import Link from 'next/link'
import React from 'react'
import { PlusSquare } from 'react-feather'
import { Card, CardBody, Col } from 'reactstrap'

const AddTitleOfCard = () => {
  return (
   <Col xxl='3' sm='6' className='box-col-4 xl-4'>
    <Card className='common-hover'>
        <CardBody>
            <Link href={Href} className='effect-card'>
                <div className='common-box1 common-align'>
                    <PlusSquare className='flex-shrink-0'/>
                    <h4>{AddTitleOfCards}</h4>
                </div>
                <p className='mb-0'>This is an example card for you to use. you are able to include subtitles in your according.</p>
                <div className='go-corner'>
                <div className="go-arrow"></div>
                </div>
            </Link>
        </CardBody>
    </Card>
   </Col>
  )
}

export default AddTitleOfCard
