import { AddtiveRadiuss } from '@/Constant'
import { AdditiveRadiusData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const AdditiveRadius = () => {
  return (
     <Col xl='4' sm='12'>
        <div className='border-wrapper h-100 border'>
            <h5 className='mb-3'>{AddtiveRadiuss}</h5>
            {AdditiveRadiusData.map((data,index) => (
                <div className='helper-common-box' key={index}>
                    <div className={`helper-radius radius-wrapper ${data}`}></div><span>{data}</span>
                </div>
            ))}
        </div>
     </Col>
  ) 
}

export default AdditiveRadius
