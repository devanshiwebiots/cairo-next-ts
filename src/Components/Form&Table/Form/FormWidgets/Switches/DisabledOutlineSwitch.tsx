import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DisabledOutlineSwitches } from '@/Constant'
import { DisableOutlineSwitchData, DisableOutlineSwitchDataList } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonSwitchSpan from './Common/CommonSwitchSpan'

const DisabledOutlineSwitch = () => {
  return (
   <Col md='6'>
    <Card>
        <CommonCardHeader title={DisabledOutlineSwitches} span={DisableOutlineSwitchData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='common-flex'>
         {DisableOutlineSwitchDataList.map((item, i) => (
            <div key={i} className='d-flex'>
               <div className='flex-grow-1 text-end icon-state switch-outline'>
                <CommonSwitchSpan key={i} color={item}/>
               </div>
            </div>
         ))}
        </CardBody>
    </Card>
   </Col>
  )
}

export default DisabledOutlineSwitch
