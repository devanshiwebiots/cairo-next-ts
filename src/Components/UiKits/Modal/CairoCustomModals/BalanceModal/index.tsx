import { ClickHere } from '@/Constant';
import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import { CommonMofiModalTitle } from '../Common';
import BalanceModal from './BalanceModal';

const ModalThird = () => {
    const [modalThird, setModalThird] = useState(false);
    const modalThirdTogggle = () => setModalThird(!modalThird);
  
  return (
    <Col xl="4" md="12" className="custom-alert text-center">
        <div className='card-wrapper border rounded-3 h-100'>
            <div className='cairo-demo-img'>
            <CommonMofiModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of Mofi dashboard balance card." />
            <div className='overflow-hidden balance-modal'>
            <Button color="primary" className="mx-auto mt-3" onClick={modalThirdTogggle}>{ClickHere}</Button>
            </div>
            <BalanceModal modalThird={modalThird} modalThirdToggle={modalThirdTogggle} />
            </div>
        </div>
    </Col>
  )
}

export default ModalThird
