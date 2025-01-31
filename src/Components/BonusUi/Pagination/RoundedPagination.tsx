import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, NextData, RoundedPaginations } from '@/Constant'
import { RoundedPaginationData } from '@/Data/BonusUi/Paginations'
import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const RoundedPagination = () => {
  return (
  <Col md='6'>
    <Card>
        <CommonCardHeader title = {RoundedPaginations} span={RoundedPaginationData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
        <Pagination className="pagination pagination-dark pagin-border-dark" aria-label="Page navigation example">
          <PaginationItem ><PaginationLink className="rounded-circle me-2" href={Href} first ></PaginationLink></PaginationItem>
          {NextData.map((item,index)=>(<PaginationItem key={index}><PaginationLink  className="rounded-circle me-2" href={Href}>{item}</PaginationLink></PaginationItem>))}
          <PaginationItem><PaginationLink className="rounded-circle me-2" href={Href} last></PaginationLink></PaginationItem>
        </Pagination>
        </CardBody>
    </Card> 
  </Col>
  )
}

export default RoundedPagination
