import { UnorderList } from '@/Constant'
import { UnorderData } from '@/Data/Uikits/typography'
import React from 'react'
import { Col } from 'reactstrap'

const UnorderLists = () => {
  return (
     <Col md='6' xxl='3'>
        <div className='card-wrapper border rounded-3'>
            <h6 className='sub-title '>{UnorderList}</h6>
            <ul className='mb-3'>
            {UnorderData.map((data, i) => (
                <li key={i}>{data}</li>
            ))}
            </ul>
        </div>
     </Col>
  )
}

export default UnorderLists
