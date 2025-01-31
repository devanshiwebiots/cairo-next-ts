import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ScrollingLongContent, ScrollingModal } from '@/Constant'
import { ScrollingLongContentModalSpan } from '@/Data/Uikits/Modal'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import ScrollingContentCommonModal from './ScrollingContentCommonModal'

const ScrollingLongContentModal = () => {
    const [scrollingModal, setScrollingModal] = useState(false);

    const scrollingModalToggle = () => setScrollingModal(!scrollingModal)
  return (
    <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={ScrollingLongContent} span={ScrollingLongContentModalSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <Button color='secondary' onClick={scrollingModalToggle}>{ScrollingModal}</Button>
                <ScrollingContentCommonModal isOpen={scrollingModal} toggle={scrollingModalToggle}/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default ScrollingLongContentModal
