import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { CairoLogin, StaticBackdropModalBtn, StaticBackdropModals } from '@/Constant';
import { StaticModalData } from '@/Data/Uikits/Modal';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import StaticForm from './StaticForm';

const StaticBackdropModal = () => {
    const [staticModal, setStaticModal] = useState(false);
    const staticModalToggle = () => setStaticModal(!staticModal)
  return (
     <Col xl='4'>
        <Card>
            <CommonUIkitsComponent title={StaticBackdropModals} span={StaticModalData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Button color='primary' onClick={staticModalToggle}>{StaticBackdropModalBtn}</Button>
                <CommonModal backdrop='static' modalBodyClassName='social-profile text-start' isOpen={staticModal} toggle={staticModalToggle}>
                    <div className='modal-toggle-wrapper'>
                        <h3>{CairoLogin}</h3>
                        <p>Fill in your information below to continue.</p>
                        <StaticForm staticModalToggle = {staticModalToggle}/>
                    </div>
                </CommonModal>
            </CardBody>
        </Card>
     </Col>
  )
}

export default StaticBackdropModal
