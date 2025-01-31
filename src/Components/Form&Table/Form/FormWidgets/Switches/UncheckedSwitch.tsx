import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { UncheckedSwitches } from '@/Constant'
import { UncheckedSwitchData, UncheckedSwitchDataList } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Label } from 'reactstrap'
import CommonSwitchSpan from './Common/CommonSwitchSpan'

const UncheckedSwitch = () => {
  return (
    <Col xl='4' sm='6'>
        <Card className='height-equal' style={{minHeight:'480px'}}>
            <CommonCardHeader title={UncheckedSwitches} span={UncheckedSwitchData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='common-flex flex-column switch-wrapper'>
                {UncheckedSwitchDataList.map(({ color, text }, index) => (
                    <div className='d-flex align-items-center' key={index}>
                        <div className='text-end'>
                            <CommonSwitchSpan color={color} defaultChecked/>
                        </div>
                        <Label className='m-l-10'>{text}</Label>
                    </div>
                ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default UncheckedSwitch
