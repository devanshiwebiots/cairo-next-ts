import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BreadcrumbBonusUi, Breadcrumbs, Href, WithIconsBreadcrumbs } from '@/Constant'
import { WithIconBreadcrumbData } from '@/Data/BonusUi/Breadcrumb'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

const WithIconsBreadcrumb = () => {
  return (
    <Col md='6'>
      <Card className='height-equal'  style={{minHeight:'161.406px'}}>
        <CommonCardHeader title={WithIconsBreadcrumbs} span={WithIconBreadcrumbData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
        <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbBonusUi}</a></BreadcrumbItem>
            <BreadcrumbItem active>{Breadcrumbs}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb
