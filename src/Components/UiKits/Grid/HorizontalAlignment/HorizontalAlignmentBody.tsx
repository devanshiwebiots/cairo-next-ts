import { VerticalAlignmentData } from '@/Data/Uikits/Grid'
import React from 'react'
import { Row } from 'reactstrap'

const HorizontalAlignmentBody = () => {
  return (
    <div className='grid-showcase grid-align'>
      {VerticalAlignmentData.map((data, i) => (
        <Row className={`justify-content-${data.alignItem}`} key={i}>
            <div className='col-5'><span className='bg-white'>{data.title}</span></div>
            <div className='col-5'><span className='bg-white'>{data.title2}</span></div>
        </Row>
      ))}
    </div>
  )
}

export default HorizontalAlignmentBody
