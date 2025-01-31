import { Box } from '@/Constant'
import { LtrDataType } from '@/Types/ThemeCustomizerTypes'
import React from 'react'
import { Badge } from 'reactstrap'
import CommonUL from './CommonUL'

const BoxLayout: React.FC<LtrDataType> = ({layout_type, handleLayout}) => {
  return (
    <li className={`${layout_type === 'box-layout' ? 'active' : ''}`} onClick={() => handleLayout('box-layout')}>
        <div className='header bg-light'>
            <CommonUL />
        </div>
        <div className='body'>
            <ul>
                <li className='bg-light sidebar'></li>
                <li className='bg-light body'>
                    <Badge color='primary'>{Box}</Badge>
                </li>
            </ul>
        </div>
    </li>
  )
}

export default BoxLayout
