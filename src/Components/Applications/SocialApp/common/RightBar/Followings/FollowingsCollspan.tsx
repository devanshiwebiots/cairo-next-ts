import { AddFriend, Href, ImagePath } from '@/Constant'
import { FollowingData } from '@/Data/UserProfile'
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CardBody, Collapse } from 'reactstrap'

const FollowingsCollspan: React.FC<MyProfileClassCollapseProp> = ({ isFilter}) => {
  return (
    <Collapse isOpen={isFilter}>
        <CardBody className='social-list filter-cards-view'>
            {FollowingData.map((data, i) => (
                <div className='d-flex' key={i}>
                    <Image src={`${ImagePath}/user/${data.imageName}`} className='img-50 img-fluid m-r-20 rounded-circle' alt='' width={50} height={50}/>
                    <div className='flex-grow-1'><span className='d-block'>{data.name}</span><Link href={Href}>{AddFriend}</Link></div>
                </div>
            ))}
        </CardBody>
    </Collapse>
  )
}

export default FollowingsCollspan
