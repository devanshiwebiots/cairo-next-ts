import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DisableTouchSwipings } from '@/Constant'
import { DisableTouchDataList, DisableTouchSwipingsList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const DisableTouchSwiping = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={DisableTouchSwipings} span={DisableTouchSwipingsList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <CommonCarousel data={DisableTouchDataList} control/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DisableTouchSwiping
