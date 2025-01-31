import { CommonFullScreenDataType } from '@/Types/UikitsType'
import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import CommonModal from '../../Common/CommonModal'
import UXDesigner from './UXDesigner'
import WebDesign from './WebDesign'

const CommonFullScreenData: React.FC<CommonFullScreenDataType> = ({color, onClick, isOpen, title, fullscreen, toggle}) => {
  return (
  <Fragment>
   <Button outline color={color} onClick={onClick}>{title}</Button>
   <CommonModal fullscreen={fullscreen} modalBodyClassName='fs-5 m-0' fullTitle={title} isOpen={isOpen} toggle={toggle} modalTitleClassName='dark-modal'>
        <WebDesign />
        <UXDesigner />
   </CommonModal>
  </Fragment>
  )
}

export default CommonFullScreenData
