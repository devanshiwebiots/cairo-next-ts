import { AskQuestion, Href, Navigation } from '@/Constant'
import Link from 'next/link'
import React from 'react'
import { MessageSquare, Settings } from 'react-feather'
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap'
import NavigationQuestion from './NavigationQuestion'

const AskQustions = () => {
  return (
   <Col lg='12'>
     <Card className='card-mb-faq'>
        <CardHeader className='faq-header pb-0'>
            <h4>{Navigation}</h4>
            <Settings />
        </CardHeader>
        <CardBody className='faq-body'>
            <div className='navigation-btn'>
                <Link className='btn btn-primary' href={Href}>
                    <MessageSquare className='m-r-10'/>
                    {AskQuestion}
                </Link>
            </div>
            <NavigationQuestion />
        </CardBody>
     </Card>
   </Col>
  )
}

export default AskQustions
