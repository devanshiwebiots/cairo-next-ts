import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ColoredTooltips, Primary } from '@/Constant'
import { ColorTooltipData, ColorTooltipList } from '@/Data/Uikits/Tooltip'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'
import CommonTooltip from '../Common/CommonTooltip'

const ColoredTooltip = () => {
    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip);
  return (
    <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={ColoredTooltips} span={ColorTooltipData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='common-flex'>
                    <Button color="primary" className="mb-0 me-0" id="Tooltip-3">{Primary}</Button>
                    <Tooltip target="Tooltip-3" placement="top" isOpen={tooltip} toggle={toggle}>{Primary}</Tooltip>
                    {ColorTooltipList.map((item, index) => (
                        <CommonTooltip key={index} item={item}/>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default ColoredTooltip
