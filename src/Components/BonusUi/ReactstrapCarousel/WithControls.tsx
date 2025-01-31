import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithControl } from '@/Constant'
import { WithControlDataList, WithControlList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const WithControls = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={WithControl} span={WithControlList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <CommonCarousel data={WithControlDataList} control interval='2000'/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default WithControls
