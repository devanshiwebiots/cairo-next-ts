import { marginbottom } from '@/Constant'
import { OneSidePaddingData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const MarginBottom = () => {
  return (
    <Col xxl='3' sm='6'>
    <div className='border-wrapper h-100 alert-light-light dark-helper'>
        <h5 className='mb-3'>{marginbottom}</h5>
        <div className='common-p-box'>
            {OneSidePaddingData.map((data,index) => (
                <span key={index}>m-t-{data}</span>
            ))}
        </div>
    </div>
</Col>
  )
}

export default MarginBottom
