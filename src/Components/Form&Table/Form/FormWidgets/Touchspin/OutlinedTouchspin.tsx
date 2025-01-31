import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OutlinedTouchspins } from '@/Constant'
import { DefaultTouchSpinData, TouchSpinData } from '@/Data/Form& Table/Form'
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonTouchspin from './Common/CommonTouchspin'

const OutlinedTouchspin = () => {
    const [values, setValues] = useState(DefaultTouchSpinData.map(data => data.id - 1))

    const handleIncrement = (index: number) => {
      setValues(values.map((value, i) => i === index ? value + 1 : value))
    }
  
    const handleDecrement = (index: number) => {
      setValues(values.map((value, i) => i === index && value > 0 ? value - 1 : value))
    }
  return (
     <Col xl='6'>
        <Card>
            <CommonCardHeader title={OutlinedTouchspins} span={TouchSpinData} headClass='pb-0' spanClass='mb-0 mt-1'/>
            <CardBody className='common-flex'>
                {DefaultTouchSpinData.map((data, index) => (
                    <CommonTouchspin key={data.id} outline color={data.color} value={values[index]}
                    onIncrement={() => handleIncrement(index)}
                    onDecrement={() => handleDecrement(index)}/>
                ))}
            </CardBody>
        </Card>
     </Col>
  )
}

export default OutlinedTouchspin
