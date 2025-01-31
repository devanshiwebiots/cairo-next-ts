import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { MoreVertical } from 'react-feather'

const NewUsersSocial = () => {
  return (
    <div className='new-users-social'>
        <div className='d-flex'>
            <Image src={`${ImagePath}/user/1.jpg`} className='rounded-circle image-radius m-r-15' alt='' width={58} height={58}/>
            <div className='flex-grow-1'>
                <h4 className='mb-0'>ELANA</h4>
                <p>January, 12,2024</p>
            </div>
            <span className='pull-right mt-0'><MoreVertical /></span>
        </div>
    </div>
  )
}

export default NewUsersSocial
