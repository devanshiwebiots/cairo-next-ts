import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CloseBadgesCart, Href } from '@/Constant'
import { CloseBadgesData, CloseBadgesSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const CloseBadges = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonUIkitsComponent title={CloseBadgesCart} span={CloseBadgesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='badge-spacing image-badges'>
                    {CloseBadgesData.map(({color, text, icon, className}, index) => (
                        <span className={`badge common-align txt-${color} rounded-pill badge-l-${color} ${className} rounded-pill border border-${color}`} key={index}> {text}
                            <a href={Href}>{icon}</a>
                        </span>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default CloseBadges
