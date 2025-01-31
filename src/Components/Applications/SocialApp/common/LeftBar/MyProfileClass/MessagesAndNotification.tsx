import { MyPage } from '@/Constant'
import React from 'react'
import { Badge } from 'reactstrap'

const MessagesAndNotification = () => {
  return (
    <div className='flex-grow-1'>
        <h6 className='font-primary'>{MyPage}</h6>
        <span className='d-block'>
            <span>
                <i className="fa fa-comments-o"/>
                <span className='px-2'>Message<Badge pill color='light'>9</Badge></span>
            </span>
        </span>
        <span className='d-block'>
            <span>
                <i className="fa fa-bell-o"/>
                <span className='px-2'>Notification<Badge pill color='light'>9</Badge></span>
            </span>
        </span>
    </div>
  )
}

export default MessagesAndNotification
