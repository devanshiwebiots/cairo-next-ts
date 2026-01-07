import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const UserDetail = () => {
  return (
    <div className='d-flex align-items-center'>
      <div className='media-size-email'>
        <Image src={`${ImagePath}/user/user.png`} className='me-3 rounded-circle' alt='' width={52} height={52} unoptimized/>
      </div>
      <div className='flex-grow-1'>
        <h4>Mark Jecno</h4>
        <p>Markjecno@gmail.com</p>
      </div>
    </div>
  )
}

export default UserDetail
