import { LatestPhototxt } from '@/Constant'
import React, { useState } from 'react'
import { Card } from 'reactstrap'
import HeaderWithIcon from '../../HeaderWithIcon'
import LatestPhotosCollspan from './LatestPhotosCollspan'

const LatestPhoto = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Card>   
        <HeaderWithIcon Heading={LatestPhototxt} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <LatestPhotosCollspan isFilter={isOpen}/>
   </Card>
  )
}

export default LatestPhoto
