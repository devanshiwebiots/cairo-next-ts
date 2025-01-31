import { ProfileIntroTxt } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import ProfileIntoCollspan from './ProfileIntoCollspan'

const ProfileIntro = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Card>
      <HeaderWithIcon Heading={ProfileIntroTxt} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <ProfileIntoCollspan isFilter={isOpen}/>
   </Card>
  )
}

export default ProfileIntro
