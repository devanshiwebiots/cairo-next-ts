import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ButtonsWithDropdown, ButtonsWithDropdownTitle } from '@/Constant'
import { ButtonWithDropdownData, ButtonWithDropForth, ButtonWithDropOne, ButtonWithDropThird, ButtonWithDropTwo } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import ButtonDropdownList from './Common/ButtonDropdownList'

const ButtonsWithDropdowns = () => {
  return (
   <Col xl='6'>
      <Card className='height-equal' style={{ minHeight:'327.203px'}}>
        <CommonCardHeader title={ButtonsWithDropdown} span={ButtonWithDropdownData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='main-custom-form card-wrapper input-group-wrapper'>
            <InputGroup>
             <ButtonDropdownList color='info' outline={true} title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropOne}/>
             <Input type='text'/>
            </InputGroup>
            <InputGroup>
            <Input type='text'/>
             <ButtonDropdownList color='danger' outline={true} title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropTwo}/>
            </InputGroup>
            <InputGroup>
             <ButtonDropdownList color='secondary' title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropThird}/>
             <Input type='text'/>
             <ButtonDropdownList color='primary' title={ButtonsWithDropdownTitle} divider={true} options={ButtonWithDropForth}/>
            </InputGroup>
        </CardBody>
      </Card>
   </Col>
  )
}

export default ButtonsWithDropdowns
