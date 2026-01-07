import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const OliviaJonMsg = () => {
  return (
    <div className='other-msg'>
    <div className='d-flex'>
        <Image src={`${ImagePath}/user/3.png`} className='img-50 img-fluid m-r-20 rounded-circle' alt='' width={50} height={50} unoptimized/>
        <div className='flex-grow-1'><span>Olivia Jon <span>15 Days Ago <i className="fa fa-reply font-primary"/></span></span>
        <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
        </div>
    </div>
    </div>
  )
}

export default OliviaJonMsg
