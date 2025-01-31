import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath } from '@/Constant'
import { GroupingSecoundData } from '@/Data/Uikits/avatars'
import React from 'react'

const GroupingSecond = () => {
  return (
    <div className='customers d-inline-block avatar-group ms-1'>
      <ul>
        <li className='d-inline-block'><RatioImage src={`${ImagePath}/avtar/16.jpg`} className='img-60 rounded-circle'/></li>
        {GroupingSecoundData.map((data, i) => (
            <li key={i} className='d-inline-block'>
                <RatioImage src={`${ImagePath}${data.src}`} className={data.className}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupingSecond
