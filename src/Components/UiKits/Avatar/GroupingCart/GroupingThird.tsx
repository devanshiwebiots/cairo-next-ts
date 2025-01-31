import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath } from '@/Constant'
import { GroupingThirdData } from '@/Data/Uikits/avatars'
import React from 'react'

const GroupingThird = () => {
  return (
    <div className='customers d-inline-block avatar-group'>
      <ul>
        <li className='d-inline-block'><RatioImage src={`${ImagePath}/user/3.jpg`} className='img-40 rounded-circle'/></li>
        {GroupingThirdData.map((data, i) => (
            <li key={i} className='d-inline-block'>
                <RatioImage src={`${ImagePath}${data.src}`} className='img-40 rounded-circle'/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupingThird
