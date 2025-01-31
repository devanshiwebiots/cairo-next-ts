import { FullScreenBelowXXL } from '@/Constant';
import React, { useState } from 'react'
import CommonFullScreenData from './Common/CommonFullScreenData';

const FullScreenBelowXxl = () => {
    const [fullScreenXxl, setFullScreenXxl] = useState(false);
    const fullScreenXxlToggle = () => setFullScreenXxl(!fullScreenXxl)
  return (
    <CommonFullScreenData color='danger-2x' onClick={fullScreenXxlToggle} toggle={fullScreenXxlToggle} isOpen={fullScreenXxl} fullscreen='xxl' title={FullScreenBelowXXL}/>
  )
}

export default FullScreenBelowXxl
