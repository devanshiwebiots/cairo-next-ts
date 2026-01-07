import { ImagePath } from '@/Constant'
import { FriendsData } from '@/Data/UserProfile'
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import Image from 'next/image'
import React from 'react'
import { CardBody, Collapse } from 'reactstrap'

const FriendsCollspan : React.FC<MyProfileClassCollapseProp>= ({isFilter}) => {
  return (
   <Collapse isOpen={isFilter}>
    <CardBody className='avatar-showcase filter-cards-view'>
        {FriendsData.map((data, i) => (
            <div key={i} className='d-inline-block friend-pic'>
                <Image src={`${ImagePath}/user/${data.image}`} className='img-50 rounded-circle' alt='' width={50} height={50} unoptimized/>
            </div>
        ))}
    </CardBody>
   </Collapse>
  )
}

export default FriendsCollspan
