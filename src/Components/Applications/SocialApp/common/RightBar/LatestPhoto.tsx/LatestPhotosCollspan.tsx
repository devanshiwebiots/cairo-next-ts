import { ImagePath } from '@/Constant';
import { LatestPhotoData } from '@/Data/UserProfile';
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import Image from 'next/image';
import React from 'react'
import { CardBody, Collapse } from 'reactstrap';

const LatestPhotosCollspan: React.FC<MyProfileClassCollapseProp> = ({isFilter}) => {

  return (
   <Collapse isOpen={isFilter}>
    <CardBody className='photos filter-cards-view px-0'>
        <ul>
        {LatestPhotoData.map((item ,i) => (
            <li key={i}>
                <div className='latest-post'>
                    <Image src={`${ImagePath}/social-app/${item.image}`} className='img-fluid' alt='' width={70} height={70}/>
                </div>
            </li>
        ))}
        </ul>
    </CardBody>
   </Collapse>
  )
}

export default LatestPhotosCollspan
