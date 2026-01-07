import { Href, ImagePath } from '@/Constant'
import { FriendData } from '@/Data/UserProfile'
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import Image from 'next/image'
import React from 'react'
import { CardBody, Collapse } from 'reactstrap'

const ActivityFeedCollapase : React.FC<MyProfileClassCollapseProp> = ({isFilter}) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {FriendData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user" width={50} height={50} unoptimized/>
            <div className="flex-grow-1">
              <span className="f-w-600 d-block">{data.title}</span>
              <p>{"Commented on Shaun Park's "}<a href={Href}>Photo</a></p>
              <span className="light-span">{data.time} Ago</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  )
}

export default ActivityFeedCollapase
