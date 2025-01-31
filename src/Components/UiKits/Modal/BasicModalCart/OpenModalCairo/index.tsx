import { OpenModalForCairo, SignUp } from '@/Constant'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import CommonModal from '../../Common/CommonModal'
import OpenModalForm from './OpenModalForm'

const OpenModalCairo = () => {
    const [openModal, setOpenModal] = useState(false)
    const openModaltoggle = () => setOpenModal(!openModal)
  return (
     <Fragment>
      <Button color='primary' onClick={openModaltoggle}>{OpenModalForCairo}</Button>
      <CommonModal isOpen={openModal} toggle={openModaltoggle} modalBodyClassName='p-0' heading="Cairo SIGN-UP">
        <div className='modal-toggle-wrapper social-profile text-start dark-sign-up'>
            <h3 className='modal-header justify-content-center border-0'>{SignUp}</h3>
             <OpenModalForm modal={openModaltoggle}/>
        </div>
      </CommonModal>
     </Fragment>
  )
}

export default OpenModalCairo
