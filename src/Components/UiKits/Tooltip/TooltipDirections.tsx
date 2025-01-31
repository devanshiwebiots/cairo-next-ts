import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DirectionsTooltip } from '@/Constant';
import { DirectionTooltipData, DirectionTooltipList } from '@/Data/Uikits/Tooltip';
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonTooltip from './Common/CommonTooltip';

const TooltipDirections = () => {
    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip)
  return (
    <Col md='6'>
        <Card>
            <CommonCardHeader title={DirectionsTooltip} span={DirectionTooltipData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='common-flex'>
                    {DirectionTooltipList.map((item) => (
                        <CommonTooltip item={item} key={item.id}/>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default TooltipDirections
