import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DarkVariants } from '@/Constant'
import { DarkVariantDataList, DarkVariantList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const DarkVariant = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={DarkVariants} span={DarkVariantList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <CommonCarousel control caption lightCaption data={DarkVariantDataList} indecators dark/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DarkVariant
