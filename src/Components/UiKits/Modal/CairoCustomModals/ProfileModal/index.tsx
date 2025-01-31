import { ClickHere } from '@/Constant';
import React, { useState } from 'react'
import { Button, Col } from 'reactstrap'
import { CommonMofiModalTitle } from '../Common'
import ProfileModal from './ProfileModal';

const ModalOne = () => {
    const [modalOne, setModalOne] = useState(false);
    const modalOneTogggle = () => setModalOne(!modalOne);
  return (
     <Col xl='4' md='6' className='custom-alert text-center'>
        <div className='card-wrapper border rounded-3 h-100'>
            <div className='cairo-demo-img'>
                <CommonMofiModalTitle heading='Modal 1 -'subHeading='Profile Modal' text= 'Example of Cairo dashboard profile card.'/>
                <div className='overflow-hidden'>
                <Button color="primary" className="mx-auto mt-3" onClick={modalOneTogggle}>{ClickHere}</Button>
                </div>
                <ProfileModal modalOne={modalOne} modalOneTogggle={modalOneTogggle}/>
            </div>
        </div>
     </Col>
  )
}

export default ModalOne
