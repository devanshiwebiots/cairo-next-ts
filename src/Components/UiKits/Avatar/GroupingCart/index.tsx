import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Grouping } from '@/Constant'
import { GroupingData } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import GroupingFirst from './GroupingFirst'
import GroupingSecond from './GroupingSecond'
import GroupingThird from './GroupingThird'

const GroupingCart = () => {
  return (
    <Col xl='6' className='box-col-6'>
        <Card className='height-equal' style={{minHeight:'227.219px'}}>
            <CommonUIkitsComponent title={Grouping} span={GroupingData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='avatar-showcase'>
              <div className='avatars'>
                <GroupingFirst />
                <GroupingSecond />
                <GroupingThird />
              </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default GroupingCart
