import { Friendstxt } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import FriendsCollspan from './FriendsCollspan'

const Friends = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Card>
    <HeaderWithIcon Heading={Friendstxt} isOpen={isOpen} setIsOpen={setIsOpen}/>
    <FriendsCollspan isFilter={isOpen}/>
   </Card>
  )
}

export default Friends
