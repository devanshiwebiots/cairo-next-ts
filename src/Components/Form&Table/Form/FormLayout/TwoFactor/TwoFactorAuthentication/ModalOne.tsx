import ShowError from '@/Components/Other/common/ShowError'
import { Cancel, ModalTitle, Next } from '@/Constant'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { setModalOne, setModalTwo } from '@/Redux/Reducers/TwoFactorSlice'
import React, { Fragment } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import ModalOneData from './ModalOneData'
import ModalTwo from './ModalTwo'

const ModalOne = () => {
    const { modalOne, selectAuthenticatorMethodName } = useAppSelector((state) => state.twoFactor)
    const dispatch = useAppDispatch()

    const handleNextButton = () => {
        if(selectAuthenticatorMethodName !== '') {
            dispatch(setModalTwo())
            dispatch(setModalOne())
        }else {
            ShowError()
        }
    }
  return (
   <Fragment>
      <Modal centered isOpen={modalOne} toggle={() => dispatch(setModalOne())}>
        <ModalHeader toggle={() => dispatch(setModalOne())}>{ModalTitle}</ModalHeader>
        <ModalBody>
            <div className='modal-toggle-wrapper'>
            <p>To log into your account, you will also need to enter your username, password, and a code that was sent to you through SMS or an app.</p>
            <ModalOneData />
            <Button color="dark" className="rounded-pill w-100 mt-3" onClick={handleNextButton}>{Next}</Button>
            <Button color="transparent" className="rounded-pill w-100 pb-0 dark-toggle-btn" onClick={() => dispatch(setModalOne())}>{Cancel}</Button>
            </div>
        </ModalBody>
      </Modal>
      <ModalTwo />
   </Fragment>
  )
}

export default ModalOne
