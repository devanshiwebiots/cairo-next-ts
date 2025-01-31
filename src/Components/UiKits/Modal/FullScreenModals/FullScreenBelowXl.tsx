import { FullScreenBelowXL } from '@/Constant';
import React, { useState } from 'react'
import CommonFullScreenData from './Common/CommonFullScreenData';

const FullScreenBelowXl = () => {
    const [fullScreenXl, setFullScreenXl] = useState(false);
    const fullScreenXlToggle = () => setFullScreenXl(!fullScreenXl)
  return (
    <CommonFullScreenData onClick={fullScreenXlToggle} isOpen={fullScreenXl} toggle={fullScreenXlToggle} fullscreen='xl' title={FullScreenBelowXL} color='primary-2x'/>
  )
}

export default FullScreenBelowXl
