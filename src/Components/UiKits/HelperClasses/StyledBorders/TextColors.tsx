import { TextColorstxt } from '@/Constant'
import { TextColorsData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const TextColors = () => {
  return (
    <Col xxl='3' sm='6'>
        <div className='border-wrapper alert-light-light h-100 dark-helper'>
            <h5 className='mb-3'>{TextColorstxt}</h5>
            {TextColorsData.map((data, i) => (
                <div className='helper-common-box' key={i}>
                    <div className={`helper-box helper-text border ${data.className} ${data.color}`}>C </div><span>{data.color}</span>
                </div>
            ))}
        </div>
    </Col>
  )
}

export default TextColors
