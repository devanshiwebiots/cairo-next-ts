import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HTMLElementsWithHoverEffect } from '@/Constant';
import { HoverTooltipData, HoverTooltipList } from '@/Data/Uikits/Tooltip';
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonTooltip from './Common/CommonTooltip';

const ElementsWithHoverEffect = () => {
    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip)
  return (
   <Col md='6'>
    <Card>
        <CommonCardHeader title={HTMLElementsWithHoverEffect} span={HoverTooltipData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <div className='common-flex'>
                {HoverTooltipList.map((item) => (
                    <CommonTooltip item={item} key={item.id}/>
                ))}
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default ElementsWithHoverEffect
