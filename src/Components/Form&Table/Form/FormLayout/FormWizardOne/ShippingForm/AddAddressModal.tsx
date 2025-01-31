import { Address, AddressType, Cancel, Close, ContactNo, ContactNumber, EnterYourAddress, EnterYourName, Information, Name, Save } from '@/Constant';
import React from 'react'
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

interface AddAddressModalProps {
    isOpen: boolean;
    toggle: () => void;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({isOpen, toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{Information}</ModalHeader>
    <ModalBody>
       <Col xl='12'>
        <FormGroup>
            <Label check>{Name}</Label>
            <Input type='text' placeholder={EnterYourName}/>
        </FormGroup>
       </Col>
       <Col xl='12'>
        <FormGroup>
            <Label check>{Address}</Label>
            <Input type='text' placeholder={EnterYourAddress}/>
        </FormGroup>
       </Col>
       <Col xl='12'>
        <FormGroup>
            <Label check>{AddressType}</Label>
            <Input type='select' placeholder={EnterYourAddress}>
                <option value={'Home'}>Home</option>
                <option value={'Office'}>Office</option>
            </Input>
        </FormGroup>
       </Col>
       <Col xl='12'>
        <FormGroup>
            <Label check>{ContactNo}</Label>
            <Input type='number' placeholder={'123456789'}/>
        </FormGroup>
       </Col>

    </ModalBody>
    <ModalFooter>
        <Button color="light" onClick={toggle}>{Close}</Button>
        <Button color="primary" onClick={toggle}>{Save}</Button>
    </ModalFooter>
</Modal>
  )
}

export default AddAddressModal
