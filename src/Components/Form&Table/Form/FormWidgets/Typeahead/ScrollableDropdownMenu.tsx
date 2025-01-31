import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ScrollableDropDownMenu } from '@/Constant'
import { CountryDataList, ScrollableDropdownData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, CardBody, Col, Form } from 'reactstrap'

const ScrollableDropdownMenu = () => {
  return (
   <Col sm='12' md='6'>
    <Card>
        <CommonCardHeader title={ScrollableDropDownMenu} span={ScrollableDropdownData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <div id='scrollable-dropdown-menu'>
                <Form className='theme-form'>
                    <div className='w-100'>
                         <Typeahead options={CountryDataList} placeholder="Countries" id="Scrollable DropdownMenu"/>
                    </div>
                </Form>
            </div> 
        </CardBody>
    </Card>
   </Col>
  )
}

export default ScrollableDropdownMenu
