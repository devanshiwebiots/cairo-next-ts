import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath } from '@/Constant'
import { GroupingFirstData } from '@/Data/Uikits/avatars'
import React from 'react'

const GroupingFirst = () => {
  return (
    <div className='customers d-inline-block avatar-group'>
      <ul>
        <li className='d-inline-block'><RatioImage src={`${ImagePath}/avtar/4.jpg`} className='img-100 b-r-8'/></li>
        {GroupingFirstData.map((data, i) => (
            <li key={i} className='d-inline-block'>
                <RatioImage src={`${ImagePath}${data.src}`} className={data.className}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupingFirst
