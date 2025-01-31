import { ExtraLargeModals, WebDesigner } from '@/Constant';
import { FullScreenData } from '@/Data/Uikits/Modal';
import React, { Fragment, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../../Common/CommonModal';

const ExtraLargeModal = () => {
  const [extraLargeScreen, setExtraLargeScreen] = useState(false);
  const extraLargeScreenToggle = () => setExtraLargeScreen(!extraLargeScreen)
  return (
   <Fragment>
    <Button color='info' onClick={extraLargeScreenToggle}>{ExtraLargeModals}</Button>
    <CommonModal size='xl' isOpen={extraLargeScreen} toggle={extraLargeScreenToggle} sizeTitle='Extra Large modal'>
        <div className='large-modal-header'><ChevronsRight /><h5 className='f-w-600'>{WebDesigner}</h5></div>
        <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
        {FullScreenData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header"><ChevronsRight /><h5>{title}</h5></div>
            <p className="modal-padding-space">{text}</p>
          </Fragment>
        ))}
    </CommonModal>
   </Fragment>
  )
}

export default ExtraLargeModal
