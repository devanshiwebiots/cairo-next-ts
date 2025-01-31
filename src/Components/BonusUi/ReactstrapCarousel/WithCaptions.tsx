import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithCaption } from '@/Constant'
import { WithCaptionDataList, WithCaptionsList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const WithCaptions = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={WithCaption} span={WithCaptionsList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <CommonCarousel data={WithCaptionDataList} caption indecators ride='carousel' control/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default WithCaptions
