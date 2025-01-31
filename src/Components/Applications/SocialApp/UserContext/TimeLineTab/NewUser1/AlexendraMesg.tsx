import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const AlexendraMesg = () => {
  return (
    <div className='other-msg'>
    <div className='d-flex'>
     <Image src={`${ImagePath}/user/2.png`} className='img-50 img-fluid m-r-20 rounded-circle' alt='' width={50} height={50}/>
     <div className='flex-grow-1'><span>Alexendra Dhadio <span>1 Month Ago <i className="fa fa-reply font-primary"/></span></span>
     <p>yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)</p>
     </div>
    </div>
    </div>
  )
}

export default AlexendraMesg
