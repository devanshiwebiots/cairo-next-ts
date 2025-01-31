import { Dribbble, Facebook, Twitter } from '@/Constant'
import { ProfileIntroData } from '@/Data/UserProfile'
import { MyProfileClassCollapseProp } from '@/Types/UserProfile'
import React, { Fragment } from 'react'
import { Button, CardBody, Collapse } from 'reactstrap'

const ProfileIntoCollspan: React.FC<MyProfileClassCollapseProp> = ({isFilter}) => {
  return (
   <Collapse isOpen={isFilter}>
     <CardBody className=' filter-cards-view'>
        {ProfileIntroData.map((data, i) => (
            <Fragment key={i}>
                <span className='f-w-500 mb-2 d-block'>{data.title} :</span>
                <p>{data.paragraph}</p>
            </Fragment>
        ))}
        <div className='f-w-500 social-network theme-form'><span>Social Networks</span>
        <Button className='btn social-btn btn-fb mb-2 text-center' color="transparent"><i className="fa fa-facebook m-r-5"/>{Facebook}</Button>
        <Button className='btn social-btn btn-twitter mb-2 text-center' color="transparent"><i className="fa fa-twitter m-r-5"/>{Twitter}</Button>
        <Button className='btn social-btn btn-google text-center' color="transparent"><i className="fa fa-dribbble m-r-5"/>{Dribbble}</Button>
        </div>
     </CardBody>
   </Collapse>
  )
}

export default ProfileIntoCollspan
