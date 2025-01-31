import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import {SearchHere, SearchTableButton } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const SearchCard = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonCardHeader headClass='pb-0' title={ SearchTableButton}/>
         <CardBody>
            <div className='blog-search'>
                <input className='form-control' type='text' placeholder={SearchHere}/><i className="fa fa-search"/>
            </div>
         </CardBody>
    </Card>
   </Col>
  )
}

export default SearchCard
