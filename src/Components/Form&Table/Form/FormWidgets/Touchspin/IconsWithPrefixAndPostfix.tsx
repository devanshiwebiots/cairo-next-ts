import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { IconsWithPrefixAndPostfixs } from '@/Constant'
import { TouchSpinData } from '@/Data/Form& Table/Form'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'

const IconsWithPrefixAndPostfix = () => {
    const [values, setValues] = useState([0, 0]);
  const handleIncrement = (index: number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index ? value + 1 : value));
    });
  };
  const handleDecrement = (index: number) => {
    setValues((prevValues) => {
      return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
    });
  };
  return (
    <Col xl='6'>
       <Card>
         <CommonCardHeader title={IconsWithPrefixAndPostfixs} span={TouchSpinData} spanClass='mb-0 mt-1' headClass='pb-0'/>
         <CardBody className='common-flex pre-post-touchspin'>
            <InputGroup style={{ width: '320px' }}>
            <Button color='primary' className='decrement-touchspin btn-touchspin px-3' onClick={() => handleDecrement(0)}><i className="fa fa-minus"/></Button>
            <InputGroupText>{'$'}</InputGroupText>
            <Input className='input-touchspin spin-outline-primary' type='number' value={values[0]} readOnly />
            <Button color='primary' className='increment-touchspin btn-touchspin px-3'  onClick={() => handleIncrement(0)}><i className="fa fa-plus"/></Button>
            </InputGroup>

            <InputGroup style={{ width: '320px'}}>
            <Button color='primary' className='decrement-touchspin btn-touchspin px-3' onClick={() => handleDecrement(1)}><i className="fa fa-minus"/></Button>
            <Input className='input-touchspin spin-outline-primary' type='number' value={values[1]} readOnly/>
            <InputGroupText>{'%'}</InputGroupText>
            <Button color='primary' className='increment-touchspin btn-touchspin px-3' onClick={() => handleIncrement(1)}><i className="fa fa-plus"/></Button>
            </InputGroup>
         </CardBody>
       </Card>
    </Col>
  )
}

export default IconsWithPrefixAndPostfix
