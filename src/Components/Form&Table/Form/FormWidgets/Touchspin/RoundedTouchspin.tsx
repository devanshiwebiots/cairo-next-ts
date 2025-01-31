import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RoundedTouchspins } from '@/Constant'
import { DefaultTouchSpinData, TouchSpinData } from '@/Data/Form& Table/Form'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonTouchspin from './Common/CommonTouchspin'

const RoundedTouchspin = () => {
    const [values, setValues] = useState(DefaultTouchSpinData.map(data => data.id - 1))

  const handleIncrement = (index: number) => {
    setValues(values.map((value, i) => i === index ? value + 1 : value))
  }

  const handleDecrement = (index: number) => {
    setValues(values.map((value, i) => i === index && value > 0 ? value - 1 : value))
  }

  return (
  <Col xl='12'>
     <Card>
        <CommonCardHeader title={RoundedTouchspins} span={TouchSpinData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody className='common-flex rounded-touchspin'>
            {DefaultTouchSpinData.map((data, index) => (
                <CommonTouchspin key={data.id} color={data.color} faAngle   value={values[index]}
                onIncrement={() => handleIncrement(index)}
                onDecrement={() => handleDecrement(index)}/>
            ))}
        </CardBody>
     </Card>
  </Col>
  )
}

export default RoundedTouchspin
