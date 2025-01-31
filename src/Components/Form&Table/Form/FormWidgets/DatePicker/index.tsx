import React from 'react'
import { Container, Row } from 'reactstrap'
import BootstrapCalendar from './BootstrapCalendar'
import DatesPicker from './DatesPicker'
import DefaultCalendar from './DefaultCalendar'
import TimePicker from './TimePicker'

const DatepickerContainer = () => {
  return (
   <Container fluid>
    <Row>
        <DefaultCalendar />
        <BootstrapCalendar />
        <DatesPicker />
        <TimePicker />
    </Row>
   </Container>
  )
}

export default DatepickerContainer
