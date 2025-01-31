import { BorderColors } from '@/Constant'
import { BorderColorData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const BorderColor = () => {
  return (
   <Col xxl='3' sm='6'>
     <div className='border-wrapper h-100 alert-light-light dark-helper'>
        <h5 className='mb-3'>{BorderColors}</h5>
        {BorderColorData.map((data,index) => (
            <div className='helper-common-box' key={index}>
                <div className={`helper-box ${data} border`}></div><span>{data}</span>
            </div>
        ))}
     </div>
   </Col>
  )
}

export default BorderColor
