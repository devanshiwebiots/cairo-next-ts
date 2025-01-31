import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { CenteredModals, Close, ImagePath, SomethingWentWrong, VerticallyCentered } from '@/Constant';
import { CenteredModalList } from '@/Data/Uikits/Modal';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import CommonModal from './Common/CommonModal';
import RatioImage from '@/CommonComponent/RatioImage';

const CenteredModal = () => {
    const [centred, setCentred] = useState(false);
    const centeredToggle = () => setCentred(!centred)
  return (
     <Col xl='4'>
        <Card>
            <CommonUIkitsComponent title={CenteredModals} span={CenteredModalList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='badge-spacing'>
                <Button color='success' onClick={centeredToggle}>{VerticallyCentered}</Button>
                <CommonModal centered isOpen={centred} toggle={centeredToggle}>
                <div className="modal-toggle-wrapper">
                <ul className="modal-img">
                  <li className="text-center"><RatioImage src={`${ImagePath}/gif/danger.gif`} alt="error" /></li>
                </ul>
                <h4 className="text-center pb-2">{SomethingWentWrong}</h4>
                <p className="text-center">Attackers on malicious activity may trick you into doing something dangerous like installing software or revealing your personal informations.</p>
                <Button color="secondary" className="d-flex m-auto" onClick={centeredToggle}>{Close}</Button>
              </div>
                </CommonModal>
            </CardBody> 
        </Card>
     </Col>
  )
}

export default CenteredModal
