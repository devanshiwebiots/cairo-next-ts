import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SlidesOnlys } from '@/Constant'
import { constReactstrapCarouselData, SliesOnlyDataList } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col, UncontrolledCarousel } from 'reactstrap'

const SlidesOnly = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={SlidesOnlys} headClass='pb-0' span={constReactstrapCarouselData} spanClass='mt-1 mb-0'/>
             <CardBody>
                <CommonCarousel data={SliesOnlyDataList} interval='2000'/>
             </CardBody>
        </Card>
    </Col>
  )
}

export default SlidesOnly
