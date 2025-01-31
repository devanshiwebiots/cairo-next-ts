import { AdditiveBorders } from '@/Constant'
import { AdditiveBorderData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const AdditiveBorder = () => {
  return (
     <Col xl='4' sm='6'>
        <div className='border-wrapper h-100 border'>
            <h5 className='mb-3'>{AdditiveBorders}</h5>
             {AdditiveBorderData.map((data,index) => (
                <div className='helper-common-box' key={index}>
                    <div className={`helper-box bg-light ${data}`}></div><span>{data}</span>
                </div>
             ))}
        </div>
     </Col>
  )
}

export default AdditiveBorder
