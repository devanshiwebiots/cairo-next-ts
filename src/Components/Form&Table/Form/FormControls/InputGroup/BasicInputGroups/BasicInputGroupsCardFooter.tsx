import { ButtonBasicInputCancel, ButtonBasicInputSubmit } from '@/Constant'
import React from 'react'
import { Button, CardFooter } from 'reactstrap'

const BasicInputGroupsCardFooter = () => {
  return (
    <CardFooter>
    <Button color="primary" className="m-r-15">{ButtonBasicInputSubmit}</Button>
    <Button color="light" type="reset">{ButtonBasicInputCancel}</Button>
  </CardFooter>
  )
}

export default BasicInputGroupsCardFooter
