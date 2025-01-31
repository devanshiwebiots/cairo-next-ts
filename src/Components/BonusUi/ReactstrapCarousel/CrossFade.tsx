import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CrossFades } from '@/Constant'
import { CrossFadeDataList, CrossFadeList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const CrossFade = () => {
  return (
     <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={CrossFades} span={CrossFadeList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <CommonCarousel data={CrossFadeDataList} control fade interval='2000'/>
            </CardBody>
        </Card>
     </Col>
  )
}

export default CrossFade
