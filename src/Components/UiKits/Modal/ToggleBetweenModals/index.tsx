import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { OpenFirstModal, ToggleBetweenModal } from '@/Constant';
import { ToggleModalList } from '@/Data/Uikits/Modal';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import ToggleParentModal from './ToggleParentModal';

const ToggleBetweenModals = () => {
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false)
    const [closeAll, setCloseAll] = useState(false)

    const toggle =() => setModal(!modal)

    const toggleNested = () => {
        setNestedModal(!nestedModal)
        setCloseAll(false)
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal)
        setCloseAll(true)
    }
  return (
   <Col xl='4'>
       <Card>
        <CommonUIkitsComponent title={ToggleBetweenModal} span={ToggleModalList} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='badge-spacing'>
            <Button color='dark' onClick={toggle}>{OpenFirstModal}</Button>
            <CommonModal centered isOpen={modal} toggle={toggle}>
                <ToggleParentModal nestedModal={nestedModal} closeAll={closeAll} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll}/>
            </CommonModal>
        </CardBody>
       </Card>
   </Col>
  )
}

export default ToggleBetweenModals
