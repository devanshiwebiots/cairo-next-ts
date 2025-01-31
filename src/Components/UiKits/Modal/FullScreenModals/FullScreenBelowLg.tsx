import { FullScreenBelowLG } from '@/Constant';
import React, { useState } from 'react'
import CommonFullScreenData from './Common/CommonFullScreenData';

const FullScreenBelowLg = () => {
    const [fullScreenLg, setFullScreenLg] = useState(false);
    const fullScreenLgToggle = () => setFullScreenLg(!fullScreenLg)
  return (
    <CommonFullScreenData color='warning-2x' onClick={fullScreenLgToggle} toggle={fullScreenLgToggle} title={FullScreenBelowLG} isOpen={fullScreenLg} fullscreen='lg'/>
  )
}

export default FullScreenBelowLg
