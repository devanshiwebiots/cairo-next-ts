import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FilledTooltips } from '@/Constant';
import { FillTooltipData, FillTooltipList } from '@/Data/Uikits/Tooltip';
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonTooltip from './Common/CommonTooltip';

const FilledTooltip = () => {
    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip)
  return (
    <Col md='6'>
        <Card>
            <CommonCardHeader title={FilledTooltips} span={FillTooltipData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='common-flex'>
                    {FillTooltipList.map((item) => (
                        <CommonTooltip item={item} key={item.id} outline={true}/>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default FilledTooltip
