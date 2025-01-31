import { ImagePath } from '@/Constant'
import React from 'react'
import { Col, Row } from 'reactstrap'
import Followers from './Followers/Followers'
import Followings from './Followings/Followings'
import Friends from './Friends/Friends'
import LatestPhoto from './LatestPhoto.tsx/LatestPhoto'
import ProfileIntro from './ProfileIntro/ProfileIntro'
import Image from 'next/image'

const RightBar = () => {
  return (
   <Row>
    <Col xl='12' lg="4" md="6" sm="12" className='xl-50 box-col-6'>
        <ProfileIntro />
    </Col>
    <Col xl='12' lg="4" md="6" sm="12" className='xl-50 box-col-6'>
      <Followers />
    </Col>
    <Col xl='12' lg="4" md="6" sm="12" className='xl-50 box-col-6'>
      <Followings />
    </Col>
    <Col xl='12' lg="4" md="6" sm="12" className='xl-50 box-col-6'>
      <LatestPhoto />
    </Col>
    <Col xl='12' lg="4" md="6" sm="12" className='xl-50 box-col-6'>
      <Friends />
    </Col>
    <Col xl='12' lg="4" md="6" sm="12" className='box-col-6'>
      <div className='card'>
        <Image src={`${ImagePath}/social-app/timeline-4.png`} className='img-fluid' alt='' width={380} height={253}/>
      </div>
    </Col>
   </Row>
  )
}

export default RightBar
