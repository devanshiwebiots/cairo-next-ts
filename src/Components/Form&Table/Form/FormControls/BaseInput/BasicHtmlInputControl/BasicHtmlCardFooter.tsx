import { BasicCancelButton, BasicSubmitButton } from '@/Constant'
import React from 'react'
import { Button, CardFooter, Col } from 'reactstrap'

const BasicHtmlCardFooter = () => {
  return (
     <CardFooter className='text-end'>
        <Col m='9' className='offset-sm-3'>
            <Button color='primary' className='me-3'>{BasicSubmitButton}</Button>
            <Button color='light' type='reset'>{BasicCancelButton}</Button>
        </Col>
     </CardFooter>
  )
}

export default BasicHtmlCardFooter
