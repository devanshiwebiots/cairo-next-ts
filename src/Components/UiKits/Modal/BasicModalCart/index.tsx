import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BasicModal } from '@/Constant'
import { BasicData } from '@/Data/Uikits/Modal'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import OpenModalCairo from './OpenModalCairo'
import ScrollingModal from './ScrollingModal'
import ToolTipAndPopover from './ScrollingModal/ToolTipAndPopover'
import SimpleModal from './SimpleModal'

const BasicModalCart = () => {
  return (
    <Col lg='6'>
        <Card>
            <CommonUIkitsComponent title={BasicModal} span={BasicData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='badge-spacing'>
                <SimpleModal />
                <ScrollingModal />
                <ToolTipAndPopover />
                <OpenModalCairo />
            </CardBody>
        </Card>
    </Col>
  )
}

export default BasicModalCart
