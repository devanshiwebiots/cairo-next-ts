import { FilterHeading, FindJobs } from '@/Constant'
import React, { useState } from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'
import FilterCheckBox from './FilterCheckBox'
import HeaderWithIcon from './HeaderWithIcon'
import SearchAndMap from './SearchAndMap'

const Filter = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='accordion' id='accordionExample'>
      <Card>
        <HeaderWithIcon heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
            <CardBody className='filter-cards-view animate-chk'>
                <SearchAndMap />
                <FilterCheckBox />
            </CardBody>
            <button className="btn btn-block btn-primary text-center" type="button">{FindJobs}</button>
        </Collapse>
      </Card>
    </div>
  )
}

export default Filter
