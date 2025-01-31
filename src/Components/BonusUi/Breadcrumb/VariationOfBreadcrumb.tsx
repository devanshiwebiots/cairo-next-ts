import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BreadcrumbBootstrapTable, BreadcrumbHome, BreadcrumbTable, Href, VariationOfBreadcrumbs } from '@/Constant'
import { VariationOfBreadcrumbData } from '@/Data/BonusUi/Breadcrumb'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

const VariationOfBreadcrumb = () => {
  return (
     <Col md='6'>
        <Card className='height-equal'  style={{minHeight:'161.406px'}}>
            <CommonCardHeader title={VariationOfBreadcrumbs} span={VariationOfBreadcrumbData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='breadcrumb-space'>
            <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbHome}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbTable}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbBootstrapTable}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">{`Basic Tables`}</BreadcrumbItem>
          </Breadcrumb>
            </CardBody>
        </Card>
     </Col>
  )
}

export default VariationOfBreadcrumb
