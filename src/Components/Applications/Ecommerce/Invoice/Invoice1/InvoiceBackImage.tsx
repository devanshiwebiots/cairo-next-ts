import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath } from '@/Constant'
import React from 'react'

const InvoiceBackImage = () => {
  return (
     <td>
        <RatioImage src={`${ImagePath}/email-template/invoice-1/1.png`} className='w-100 mt-3' alt='background'/>
     </td>
  )
}

export default InvoiceBackImage
