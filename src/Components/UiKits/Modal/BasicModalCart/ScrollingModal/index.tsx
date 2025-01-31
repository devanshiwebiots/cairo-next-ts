import { ScrollingContent } from '@/Constant'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import CommonModal from '../../Common/CommonModal'
import UXDesigner from './UXDesigner'
import WedDesigners from './WedDesigners'

const ScrollingModal = () => {
    const [scrollingModal, setScrollingModal] = useState(false)
    const scrollModalToggle = () => setScrollingModal(!scrollingModal)
  return (
    <Fragment>
      <Button color='success' onClick={scrollModalToggle}>{ScrollingContent}</Button>
      <CommonModal isOpen={scrollingModal} toggle={scrollModalToggle} title='Scrolling Modal'>
        <WedDesigners />
        <UXDesigner />
      </CommonModal>
    </Fragment>
  )
}

export default ScrollingModal
