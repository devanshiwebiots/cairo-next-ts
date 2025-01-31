import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SegmentedButton, SegmentedButtonInfo, SegmentedButtonSecondary } from '@/Constant'
import { SegmentButtonData, SegmentDataOne, SegmentDataTwo } from '@/Data/Form& Table/Form'
import React from 'react'
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import ButtonDropdownList from './ButtonsWithDropdowns/Common/ButtonDropdownList'

const SegmentedButtons = () => {
  return (
     <Col md='6'>
        <Card className='height-equal'>
            <CommonCardHeader title={SegmentedButton} span={SegmentButtonData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='main-segment-btn card-wrapper input-group-wrapper'>
                <InputGroup>
                 <Button color='info' outline>{SegmentedButtonInfo}</Button>
                 <ButtonDropdownList color='info' divider options={SegmentDataOne}/>
                 <Input type='text'/>
                </InputGroup>
                <InputGroup>
                  <Input type='text'/>
                  <Button color='secondary' outline>{SegmentedButtonSecondary}</Button>
                  <ButtonDropdownList color='secondary' divider options={SegmentDataTwo}/>
                </InputGroup>
            </CardBody>
        </Card>
     </Col>
  )
}

export default SegmentedButtons
