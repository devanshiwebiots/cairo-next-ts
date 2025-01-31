import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { PreFetchHeading } from '@/Constant'
import { CountryDataList, PreFetchData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, CardBody, Col, Form } from 'reactstrap'

const PreFetch = () => {
  return (
     <Col sm='12' md='6'>
        <Card>
            <CommonCardHeader title={PreFetchHeading} span={PreFetchData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div id='the-basics'>
                    <Form className='theme-form'>
                        <div className='w-100'>
                            <Typeahead options={CountryDataList} placeholder='Countries' id='PerFetch'/>
                        </div>
                    </Form>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default PreFetch
