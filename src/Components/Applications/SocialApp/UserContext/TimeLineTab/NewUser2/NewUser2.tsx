import { Href, ImagePath, MoreComment } from '@/Constant'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommentsBox from '../NewUser1/CommentsBox'
import IssaBellMsg from '../NewUser1/IssaBellMsg'
import JasonBorneMsg from '../NewUser1/JasonBorneMsg'
import LikeContent from '../NewUser1/LikeContent'
import NewUsersSocial from '../NewUser1/NewUsersSocial'
import RatioImage from '@/CommonComponent/RatioImage'

const NewUser2 = () => {
  return (
    <Col sm='12'>
        <Card>
            <CardBody>
                <NewUsersSocial />
                <RatioImage className='img-fluid' src={`${ImagePath}/social-app/timeline-2.png`} alt=''/>
                <div className='timeline-content'>
                <p>{"I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul. The only way to do something in depth is to work hard."}</p>
                <LikeContent />
                <div className='social-chat'>
                    <JasonBorneMsg />
                    <IssaBellMsg />
                    <div className='text-center'>
                     <Link href={Href}>{MoreComment}</Link>
                      </div>
                </div>
                <CommentsBox />
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default NewUser2
