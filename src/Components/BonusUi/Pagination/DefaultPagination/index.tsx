import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultPaginations, Href, Previous } from '@/Constant'
import { DefaultPaginationsData } from '@/Data/BonusUi/Paginations'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const DefaultPagination = () => {
  return (
    <Col md='6'>
        <Card>
            <CommonCardHeader title={DefaultPaginations} span={DefaultPaginationsData} headClass='pb-0' spanClass='mt-1 mb-0 text-dark '/>
            <CardBody>
            <Pagination className="pagination-primary pagin-border-primary" aria-label="Page navigation example">
            <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>Next</PaginationLink></PaginationItem>
          </Pagination>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DefaultPagination
