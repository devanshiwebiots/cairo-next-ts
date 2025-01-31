import { AddTask, NewTasktxt } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setAddModal } from '@/Redux/Reducers/TaskSlice';
import React, { Fragment } from 'react'
import { CheckCircle } from 'react-feather';
import { Button, Modal, ModalBody } from 'reactstrap'
import CreateTaskModalForm from './CreateTaskModalForm';

const NewTask = () => {
    const { addModal } = useAppSelector((state) => state.task);
    const dispatch = useAppDispatch();
    const addToggle = () => dispatch(setAddModal());
  return (
    <Fragment>
      <button className="badge-light-primary btn-block btn-mail w-100" type="button" onClick={addToggle}><CheckCircle /> {NewTasktxt}</button>
        <Modal size='lg' isOpen={addModal} toggle={addToggle}>
            <div className='modal-header'>
                <h3 className='modal-title'>{AddTask}</h3>
                <Button color='transprant' close onClick={addToggle}/>
            </div>
            <ModalBody>
                <CreateTaskModalForm />
            </ModalBody>
        </Modal>
    </Fragment>
  )
}

export default NewTask
