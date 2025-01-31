import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CommonLink } from '@/Constant'
import { CommonLinksData } from '@/Data/Uikits/NavigateLinks'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import HoveredLinkOpacity from './HoveredLinkOpacity'
import LinkOpacity from './LinkOpacity'
import UnderlineOffset from './UnderlineOffset'
import UnderlineOpacity from './UnderlineOpacity'

const CommonLinks = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonUIkitsComponent title={CommonLink} span={CommonLinksData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <Row className='g-3'>
                <LinkOpacity />
                <HoveredLinkOpacity />
                <UnderlineOpacity />
                <UnderlineOffset />
            </Row>
        </CardBody>
    </Card>
   </Col>
  )
}

export default CommonLinks
