import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ListingTypography } from '@/Constant'
import { ListingData } from '@/Data/Uikits/typography'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DescriptionList from './DescriptionList'
import OrderList from './OrderList'
import UnorderLists from './UnorderLists'

const ListingsTypography = () => {
  return (
    <Col sm='12' className='listing'>
      <Card>
         <CommonCardHeader title={ListingTypography} span={ListingData} headClass='pb-0' spanClass='mt-1 mb-0'/>
         <CardBody>
            <Row className='g-3'>
                <UnorderLists />
                <OrderList />
                <DescriptionList />
            </Row>
         </CardBody>
      </Card>
    </Col>
  )
}

export default ListingsTypography
