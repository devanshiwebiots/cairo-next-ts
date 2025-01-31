import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ColoredBreadcrumbs } from '@/Constant'
import { ColoredBreadcrumData } from '@/Data/BonusUi/Breadcrumb'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicColoredBreadcrumb from './DynamicColoredBreadcrumb'
import { StaticColoredBreadcrumb } from './StaticColoredBreadcrumb'

const ColoredBreadcrumb = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={ColoredBreadcrumbs} span={ColoredBreadcrumData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <StaticColoredBreadcrumb />
                <DynamicColoredBreadcrumb />
            </CardBody>
        </Card>
     </Col>
  )
}

export default ColoredBreadcrumb
