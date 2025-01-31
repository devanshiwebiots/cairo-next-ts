import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath } from '@/Constant'
import { CurrentCartData } from '@/Data/Form& Table/Form'
import React from 'react'

const CurrentCartTableBody = () => {
  return (
   <tbody>
    {CurrentCartData.map((data, i) => (
      <tr key={i}>
        <td>
            <RatioImage src={`${ImagePath}/${data.imagePath}`} alt='shirt'/>
        </td>
        <td>
            <div>
                <h6>{data.productName}</h6>
                <span>{data.productSum}</span>
            </div>
        </td>
        <td>
            <p>{data.price}</p>
        </td>
      </tr>
    ))}
   </tbody>
  )
}

export default CurrentCartTableBody
