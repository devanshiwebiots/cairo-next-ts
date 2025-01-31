import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BreadcrumbAlert, BreadcrumbHome, BreadcrumbUiKits, DefaultBreadcrumbs, Href } from '@/Constant'
import { BreadcrubmData } from '@/Data/BonusUi/Breadcrumb'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

const DefaultBreadcrumb = () => {
  return (
    <Col md='6'>
        <Card className='height-equal' style={{minHeight:'161.406px'}}>
            <CommonCardHeader title={DefaultBreadcrumbs} span={BreadcrubmData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
            <Breadcrumb>
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbUiKits}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbAlert}</BreadcrumbItem>
          </Breadcrumb>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DefaultBreadcrumb
