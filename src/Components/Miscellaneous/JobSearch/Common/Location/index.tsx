import { AllLocations, LocationHeading } from '@/Constant'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import HeaderWithIcon from '../Filter/HeaderWithIcon'
import LocationCheckBox from './LocationCheckBox'

const Location = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
     <Col xl='12'>
        <Card>
            <HeaderWithIcon heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Collapse isOpen={isOpen}>
              <CardBody className=' animate-chk'>
                <LocationCheckBox />
              </CardBody>
              <button className="btn btn-block btn-primary text-center" type="button">{AllLocations}</button>
            </Collapse>
        </Card>
     </Col>
  )
}

export default Location
