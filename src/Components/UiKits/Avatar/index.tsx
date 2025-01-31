import React from 'react'
import { Container, Row } from 'reactstrap'
import AnimatedAvatar from './AnimatedAvatar'
import BadgeIndicator from './BadgeIndicator'
import GroupingCart from './GroupingCart'
import InitialLetterAvatar from './InitialLetterAvatar'
import RatiosCart from './RatiosCart'
import ShapesCart from './ShapesCart'
import SizesCart from './SizesCart'
import StatusIndicatorCart from './StatusIndicatorCart'

const AvatarContainer = () => {
  return (
    <Container fluid>
        <div className='user-profile'>
            <Row>
                <SizesCart />
                <StatusIndicatorCart />
                <ShapesCart />
                <RatiosCart />
                <GroupingCart />
                <BadgeIndicator />
                <InitialLetterAvatar />
                <AnimatedAvatar />
            </Row>
        </div>
    </Container>
  )
}

export default AvatarContainer
