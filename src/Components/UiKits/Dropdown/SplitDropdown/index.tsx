import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SplitDropdowns } from '@/Constant'
import { SplitData, SplitList } from '@/Data/Uikits/Dropdown'
import { Card, CardBody, Col } from 'reactstrap'
import SplitButtonDropdown from './SplitButtonDropdown'

const SplitDropdown = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={SplitDropdowns} span={SplitData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            {SplitList.map((data, index) => (
              <SplitButtonDropdown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SplitDropdown
