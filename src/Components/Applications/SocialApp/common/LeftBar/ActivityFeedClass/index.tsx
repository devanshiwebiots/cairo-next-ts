import { ActivityFeed } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import ActivityFeedCollapase from './ActivityFeedCollapase'

const ActivityFeedClass = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <Card>
        <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ActivityFeedCollapase isFilter={isOpen}/>
    </Card>
  )
}

export default ActivityFeedClass
