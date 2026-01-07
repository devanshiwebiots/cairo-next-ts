import { Cancel, ConnectNewAccount, ImagePath, ParentToggleTitle } from '@/Constant'
import { ToggleModalType } from '@/Types/UikitsType'
import React from 'react'
import { Button } from 'reactstrap'
import CommonModal from '../Common/CommonModal'
import ToggleChildModal from './ToggleChildModal'
import Image from 'next/image'

const ToggleParentModal: React.FC<ToggleModalType> = ({nestedModal, closeAll, toggle, toggleAll, toggleNested}) => {
  return (
    <div className='modal-toggle-wrapper'>
      <ul className='modal-img'>
        <li><Image src={`${ImagePath}/gif/whatapp.gif`} alt="whatsapp" width={100} height={100} unoptimized/></li>
        <li><Image src={`${ImagePath}/gif/instagram.gif`} alt="instagram" width={100} height={100} unoptimized/></li>
        <li><Image src={`${ImagePath}/gif/facebook.gif`} alt="facebook" width={100} height={100} unoptimized/></li>
      </ul>
      <h6>{ParentToggleTitle}</h6>
      <Button color='dark' className='rounded-pill w-100 mt-4' onClick={toggleNested}>{ConnectNewAccount}</Button>
      <CommonModal centered isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
        <ToggleChildModal toggleAll={toggleAll}/>
      </CommonModal>
      <Button color='white' className='rounded-pill w-100 dark-toggle-btn' onClick={toggle}>{Cancel}</Button>
    </div>
  )
}

export default ToggleParentModal
