import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const JasonBorneMsg = () => {
  return (
    <div className='your-msg'>
    <div className='d-flex'>
        <Image src={`${ImagePath}/user/1.jpg`} className='img-50 img-fluid m-r-20 rounded-circle' alt='' width={50} height={50}/>
        <div className='flex-grow-1'><span>Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"/></span></span>
        <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
        </div>
    </div>
</div>
  )
}

export default JasonBorneMsg
