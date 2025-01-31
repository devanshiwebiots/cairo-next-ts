import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DatePickers } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap'
import { CustomizingConjunction } from './CustomizingConjunction'
import DatePickerComponentFirst from './DatePickerComponentFirst'
import DatePickerComponentLast from './DatePickerComponentLast'
import DisabledDatePickerComponent from './DisabledDatePickerComponent'
import HumanFriendlyDatePicker from './HumanFriendlyDatePicker'
import MinMaxValueDatePicker from './MinMaxValueDatePicker'
import { MultiplesDates } from './MultiplesDates'
import MyDatePicker from './MyDatePicker'

const DatesPicker = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonCardHeader title={DatePickers} headClass='pb-0'/>
            <CardBody className='main-flatpickr'>
                <div className='card-wrapper border rounded-3'>
                    <Form className='timepicker-wrapper'>
                        <DatePickerComponentFirst />
                        <HumanFriendlyDatePicker />
                        <MinMaxValueDatePicker />
                        <DisabledDatePickerComponent />
                        <MultiplesDates />
                        <CustomizingConjunction />
                        <MyDatePicker />
                        <DatePickerComponentLast />
                    </Form>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DatesPicker
