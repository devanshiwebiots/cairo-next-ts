import { AllJobTitle, JobHeading } from '@/Constant'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import HeaderWithIcon from '../Filter/HeaderWithIcon'
import JobTitleBox from './JobTitleBox'

const JobTitle = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
   <Col xl='12'>
     <Card>
        <HeaderWithIcon heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
           <JobTitleBox />
           <button className="btn btn-block btn-primary text-center" type="button">{AllJobTitle}</button>
        </Collapse>
     </Card>
   </Col>
  )
}

export default JobTitle
