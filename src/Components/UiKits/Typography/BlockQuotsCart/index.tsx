import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Blockquotes } from '@/Constant'
import { BlockquotesData } from '@/Data/Uikits/typography'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { DynamicBlockquotes } from './DynamicBlockquotes'
import { StaticBlockQuotes } from './StaticBlockQuotes'

const BlockQuotsCart = () => {
  return (
    <Col sm='12'>
         <Card className='overflow-hidden'>
            <CommonCardHeader title={Blockquotes} span={BlockquotesData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <StaticBlockQuotes />
                <DynamicBlockquotes />
            </CardBody>
         </Card>
    </Col>
  )
}

export default BlockQuotsCart
