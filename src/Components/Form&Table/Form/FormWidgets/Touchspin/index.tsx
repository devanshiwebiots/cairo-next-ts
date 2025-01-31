import React from 'react'
import { Container, Row } from 'reactstrap'
import OutlinedTouchspin from './OutlinedTouchspin'
import { DefaultTouchspin } from './DefaultTouchspin'
import IconsWithPrefixAndPostfix from './IconsWithPrefixAndPostfix'
import ButtonsWithPrefixAndPostfix from './ButtonsWithPrefixAndPostfix'
import RoundedTouchspin from './RoundedTouchspin'

const TouchspinContainer = () => {
  return (
   <Container fluid>
    <div className='bootstrap-touchspin'>
        <Row>
            <DefaultTouchspin />
            <OutlinedTouchspin />
            <IconsWithPrefixAndPostfix />
            <ButtonsWithPrefixAndPostfix />
            <RoundedTouchspin />
        </Row>
    </div>
   </Container>
  )
}

export default TouchspinContainer
