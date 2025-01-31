import { Followingstxt } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import FollowingsCollspan from './FollowingsCollspan'

const Followings = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <Card>
        <HeaderWithIcon Heading={Followingstxt} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <FollowingsCollspan isFilter={isOpen}/>
    </Card>
  )
}

export default Followings
