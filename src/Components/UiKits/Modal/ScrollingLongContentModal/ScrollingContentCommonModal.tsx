import { Close, Save, ScrollingLongModalBtn } from '@/Constant'
import { GridCommonModalProps } from '@/Types/UikitsType'
import React from 'react'
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import UXDesigner from './UXDesigner'
import WedDesigner from './WedDesigner'

const ScrollingContentCommonModal: React.FC<GridCommonModalProps> = ({isOpen, toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-scrollable">
        <ModalHeader toggle={toggle}>{ScrollingLongModalBtn}</ModalHeader>
        <ModalBody className='custom-scrollbar'>
            <Container fluid>
                <WedDesigner />
                <UXDesigner />
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color='secondary' onClick={toggle}>{Close}</Button>
            <Button color='primary'>{Save}</Button>
        </ModalFooter>
    </Modal>
  )
}

export default ScrollingContentCommonModal
