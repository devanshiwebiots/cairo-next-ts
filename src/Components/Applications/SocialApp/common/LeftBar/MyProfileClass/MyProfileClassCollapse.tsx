import { ImagePath } from '@/Constant'
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import React from 'react'
import { CardBody, Collapse } from 'reactstrap'
import LikesViewButton from './LikesViewButton'
import MessagesAndNotification from './MessagesAndNotification'
import SocialGroup from './SocialGroup'
import Image from 'next/image'

const MyProfileClassCollapse: React.FC<MyProfileClassCollapseProp> = ( { isFilter}) => {
  return (
   <Collapse isOpen={isFilter}>
    <CardBody className='socialprofile filter-cards-view'>
        <div className='d-flex'>
        <Image className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" width={50} height={50} unoptimized/>
            <MessagesAndNotification />
        </div>
        <LikesViewButton />
        <div className='likes-profile text-center'>
            <h5><span><i className="fa fa-heart font-danger"/> 884</span></h5>
        </div>
        <div className='text-center'>35 New Likes This Week</div>
        <div className='customers text-center social-group'>
            <SocialGroup />
        </div>
            <Image src={`${ImagePath}/social-app/timeline-3.png`} className='img-fluid mt-5' alt='' width={340} height={227} unoptimized/>
    </CardBody>
   </Collapse>
  )
}

export default MyProfileClassCollapse
