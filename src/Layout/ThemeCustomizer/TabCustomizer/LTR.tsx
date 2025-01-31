import { LTRBadges } from '@/Constant'
import { LtrDataType } from '@/Types/ThemeCustomizerTypes'
import React from 'react'
import { Badge } from 'reactstrap'
import CommonUL from './CommonUL'

const LTR:React.FC<LtrDataType> = ({handleLayout, layout_type}) => {
  return (
    <li className={`${layout_type === 'ltr' ? 'active' : ''}`} onClick={() => handleLayout('ltr')}>
        <div className='header bg-light'>
            <CommonUL />
        </div>
        <div className='body'>
            <ul>
                <li className='bg-light sidebar'></li>
                <li className='bg-light body'>
                    <Badge color='primary'>{LTRBadges}</Badge>
                </li>
            </ul>
        </div>
    </li>
  )
}

export default LTR
