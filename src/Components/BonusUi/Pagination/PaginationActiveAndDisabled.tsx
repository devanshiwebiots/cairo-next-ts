import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, Next, PaginationWithActiveAndDisabled, Previous } from '@/Constant'
import { ActiveDisablePaginationsData } from '@/Data/BonusUi/Paginations'
import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationActiveAndDisabled = () => {
  return (
    <Col md='6'>
        <Card>
            <CommonCardHeader title={PaginationWithActiveAndDisabled} span={ActiveDisablePaginationsData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
            <Pagination className="pagination-success pagin-border-success mb-3" aria-label="Page navigation example">
            <PaginationItem disabled><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
          </Pagination>
            </CardBody>
        </Card>
    </Col>
  )
}

export default PaginationActiveAndDisabled
