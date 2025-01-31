import { lightBackground } from '@/Constant'
import { DarkBackgroundData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const LightBackgrounds = () => {
  return (
    <Col xl='4' sm='6'>
        <div className='border-wrapper h-100 border'>
            <h5 className='mb-3'>{lightBackground}</h5>
            {DarkBackgroundData.map((data,index) => (
                <div className='helper-common-box' key={index}>
                    <div className={`helper-box alert-light-${data}`}></div><span>alert-light-{data}</span>
                </div>
            ))}
        </div>
    </Col>
  ) 
}

export default LightBackgrounds
