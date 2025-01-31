import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import {  SizesModal } from '@/Constant'
import { SizeDatas } from '@/Data/Uikits/Modal'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ExtraLargeModal from './ExtraLargeModal'
import FullScreenModal from './FullScreenModal'
import LargeModal from './LargeModal'
import SmallModal from './SmallModal'

const SizeModalCart = () => {
  return (
     <Col lg='6'>
        <Card>
            <CommonUIkitsComponent title={SizesModal} span={SizeDatas} spanClass='mt-1 mb-0' headClass='pb-0'/>
             <CardBody className='badge-spacing'>
                <FullScreenModal />
                <ExtraLargeModal />
                <LargeModal />
                <SmallModal />
             </CardBody>
        </Card>
     </Col>
  )
}

export default SizeModalCart
