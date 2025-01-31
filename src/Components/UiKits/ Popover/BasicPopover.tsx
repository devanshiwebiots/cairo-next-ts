import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Basicpopover } from '@/Constant'
import { BasicPopoverList, BasicPopoverSpan } from '@/Data/Uikits/Popover'
import { Card, CardBody, Col } from 'reactstrap'
import CommonPopover from './Common/CommonPopover'

const BasicPopover = () => {

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Basicpopover} span={BasicPopoverSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className="common-flex popover-wrapper">
          {BasicPopoverList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicPopover
