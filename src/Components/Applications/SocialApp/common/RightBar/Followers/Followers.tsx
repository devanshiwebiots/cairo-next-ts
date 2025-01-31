import { Followerstxt } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import FollowrsCollspan from './FollowrsCollspan'

const Followers = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Card>
      <HeaderWithIcon Heading={Followerstxt} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowrsCollspan isFilter={isOpen}/>
   </Card>
  )
}

export default Followers
