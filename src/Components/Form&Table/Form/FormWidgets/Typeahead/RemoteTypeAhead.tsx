import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RemotetypeAheadHeading } from '@/Constant'
import { MoviesList, RemoteTypeHeadData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Card, CardBody, Col, Form } from 'reactstrap'

const RemoteTypeAhead = () => {
  return (
  <Col sm='12' md='6'>
     <Card>
        <CommonCardHeader title={RemotetypeAheadHeading} span={RemoteTypeHeadData} headClass='pb-0' spanClass='mt-0 mb-0'/>
        <CardBody>
            <div id='remote'>
                <Form className='theme-form'>
                    <div className='w-100'>
                        <Typeahead options={MoviesList} placeholder='Choose Option' id='Remote TypeAhead'/>
                    </div>
                </Form>
            </div>
        </CardBody>
     </Card>
  </Col>
  )
}

export default RemoteTypeAhead
