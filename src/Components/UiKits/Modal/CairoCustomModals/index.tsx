import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CairoCustomModal } from '@/Constant'
import { CustomModalData } from '@/Data/Uikits/Modal'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ModalThird from './BalanceModal'
import ModalOne from './ProfileModal'
import ModalTwo from './ResultModal'

const CairoCustomModals = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={CairoCustomModal} span={CustomModalData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody >
                <Row className='g-3'>
                    <ModalOne />
                    <ModalTwo />
                    <ModalThird />
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default CairoCustomModals
