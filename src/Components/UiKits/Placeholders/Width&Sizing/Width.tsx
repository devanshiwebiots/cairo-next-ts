import { WidthTxt } from '@/Constant'
import React from 'react'
import { CardBody, Col, Placeholder } from 'reactstrap'

const Width = () => {
  return (
    <Col xxl='12' md='6' className='box-col-6'>
        <div className='card-wrapper border rounded-3'>
            <h6 className='sub-title'>{WidthTxt}</h6>
            <p className="f-m-light">You can change the width through grid column classes, width utilities, or inline styles.<code style={{fontSize:'12px'}}> (like: w-25, w-50, w-75, w-100 ) </code></p>
            <CardBody className='p-0 placeholder-glow'>
                <Placeholder className='w-50 placeholder-light'/>
                <Placeholder className='w-75 placeholder-light'/>
                <Placeholder className='w-100 placeholder-light'/>
                <Placeholder className='w-25 placeholder-light'/>
            </CardBody>
        </div>
    </Col>
  )
}

export default Width
