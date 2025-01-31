import { SubtractiveBorders } from '@/Constant'
import { SubtractiveBorderData } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Col } from 'reactstrap'

const SubtractiveBorder = () => {
  return (
     <Col xl='4' sm='6'>
        <div className='border-wrapper h-100 border'>
            <h5 className='mb-3'>{SubtractiveBorders}</h5>
            {SubtractiveBorderData.map((data, i) => (
                <div className='helper-common-box' key={i}>
                    <div className={`helper-box bg-light border ${data.title}`}></div><span>{data.title}</span>
                </div>
            ))}
        </div>
     </Col>
  )
}

export default SubtractiveBorder
