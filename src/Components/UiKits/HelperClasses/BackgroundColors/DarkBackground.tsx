import { DarkBackgrounds } from '@/Constant'
import { DarkBackgroundData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const DarkBackground = () => {
  return (
    <Col xl='4' sm='6'>
        <div className='border-wrapper h-100 border'>
            <h5 className='mb-3'>{DarkBackgrounds}</h5>
            {DarkBackgroundData.map((data,index) => (
                <div className='helper-common-box' key={index}>
                    <div className={`helper-box bg-${data}`}></div><span>bg-{data}</span>
                </div>
            ))}
        </div>
    </Col>
  )
}

export default DarkBackground
