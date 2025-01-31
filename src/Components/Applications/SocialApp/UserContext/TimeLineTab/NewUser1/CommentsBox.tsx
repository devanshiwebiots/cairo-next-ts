import { CommentPostPlaceholder, ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap'

const CommentsBox = () => {
  return (
    <div className='comments-box'>
     <div className='d-flex'>
        <Image src={`${ImagePath}/user/1.jpg`} className='img-50 img-fluid m-r-20 rounded-circle' alt='' width={50} height={50}/>
        <div className='flex-grow-1'>
            <InputGroup className='text-box'>
                <Input className='input-txt-bx' type='text' name='message-to-send' placeholder={CommentPostPlaceholder}/>
                <div className='input-group-append'>
                    <button className='btn btn-transparent'><i className="fa fa-smile-o"/> </button>
                </div>
            </InputGroup>
        </div>
     </div>
    </div>
  )
}

export default CommentsBox
