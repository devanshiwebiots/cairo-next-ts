import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Headings } from '@/Constant'
import { HeadingData } from '@/Data/Uikits/typography'
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import HeadingsBody from './HeadingsBody'
import HeadingsTableBody from './HeadingsTableBody'

const HeadingCard = () => {
  return (
    <Col xxl='6'>
        <Card className='height-equal'>
            <CommonCardHeader title={Headings} span={HeadingData} spanClass='mt-1 mb-0 ' headClass='pb-0'/>
            <CardBody>
                <div className='table-responsive theme-scrollbar'>
                    <Table className='mb-0 typography-table'>
                        <HeadingsBody />
                        <HeadingsTableBody />
                    </Table>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default HeadingCard
