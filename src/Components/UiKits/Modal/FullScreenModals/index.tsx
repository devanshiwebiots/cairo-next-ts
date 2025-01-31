import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { FullScreenModal } from '@/Constant'
import { FullScreenModalData } from '@/Data/Uikits/Modal'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import FullModal from './FullModal'
import FullScreenBelowLg from './FullScreenBelowLg'
import FullScreenBelowMd from './FullScreenBelowMd'
import FullScreenBelowSm from './FullScreenBelowSm'
import FullScreenBelowXl from './FullScreenBelowXl'
import FullScreenBelowXxl from './FullScreenBelowXxl'

const FullScreenModals = () => {
  return (
     <Col xl='12'>
        <Card>
            <CommonUIkitsComponent title={FullScreenModal} span={FullScreenModalData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='badge-spacing'>
              <FullModal />
              <FullScreenBelowSm />
              <FullScreenBelowMd />
              <FullScreenBelowLg />
              <FullScreenBelowXl />
              <FullScreenBelowXxl />
            </CardBody>
        </Card>
     </Col>
  )
}

export default FullScreenModals
