import { AllIndustries, IndustryHeading } from '@/Constant'
import React, { useState } from 'react'
import { Button, Card, Col, Collapse } from 'reactstrap'
import HeaderWithIcon from '../Filter/HeaderWithIcon'
import IndustryBox from './IndustryBox'

const Industry = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <Col xl='12'>
        <Card>
            <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Collapse isOpen={isOpen}>
                <IndustryBox />
                <button className="btn btn-block btn-primary text-center" type="button">{AllIndustries}</button>
            </Collapse>
            
        </Card>
    </Col>
  )
}

export default Industry
