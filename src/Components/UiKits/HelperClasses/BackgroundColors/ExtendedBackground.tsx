import { ExtendedBackgrounds } from '@/Constant'
import { ExtendedBackgroundData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const ExtendedBackground = () => {
  return (
   <Col xl='4' sm='12'>
     <div className='border-wrapper h-100 border'>
        <h5 className='mb-3'>{ExtendedBackgrounds}</h5>
        {ExtendedBackgroundData.map((data,index) => (
            <div className='helper-common-box' key={index}>
                <div className={`helper-box ${data}`}></div><span>{data}</span>
            </div>
        ))}
     </div>
   </Col>
  )
}

export default ExtendedBackground
