import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ColoredHeadings } from '@/Constant'
import { HeadingData } from '@/Data/Uikits/typography'
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import ColorHeadingBody from './ColorHeadingBody'
import { ColorHeadingTableBody } from './ColorHeadingTableBody'

const ColoredHeading = () => {
  return (
   <Col xxl='6'>
     <Card className='height-equal'>
        <CommonCardHeader title={ColoredHeadings} span={HeadingData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <div className='table-responsive theme-scrollbar'>
                <Table className='mb-0 typography-table'>
                    <ColorHeadingBody />
                    <ColorHeadingTableBody />
                </Table>
            </div>
        </CardBody>
     </Card>
   </Col>
  )
}

export default ColoredHeading
