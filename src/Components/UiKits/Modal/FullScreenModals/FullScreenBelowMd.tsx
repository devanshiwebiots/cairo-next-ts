import { FullScreenBelowMD } from '@/Constant';
import React, { useState } from 'react'
import CommonFullScreenData from './Common/CommonFullScreenData';

const FullScreenBelowMd = () => {
    const [fullScreenMd, setFullScreenMd] = useState(false);
    const fullScreenMdToggle = () => setFullScreenMd(!fullScreenMd)
  return (
   <CommonFullScreenData color='success-2x' onClick={fullScreenMdToggle} isOpen={fullScreenMd} toggle={fullScreenMdToggle} title={FullScreenBelowMD} fullscreen='md' />
  )
}

export default FullScreenBelowMd
