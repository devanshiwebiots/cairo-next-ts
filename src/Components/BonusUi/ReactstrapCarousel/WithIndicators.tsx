import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithIndicator } from '@/Constant'
import { WithIndicatorDataList, WithIndicatorList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const WithIndicators = () => {
  return (
   <Col xl='6' className='col-12'>
    <Card>
        <CommonCardHeader title={WithIndicator} span={WithIndicatorList} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <CommonCarousel indecators control data={WithIndicatorDataList} ride='carousel'/>
        </CardBody>
    </Card>
   </Col>
  )
}

export default WithIndicators
