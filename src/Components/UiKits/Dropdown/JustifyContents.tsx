import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { JustifyContent } from '@/Constant';
import { JustifyData, JustifyList } from '@/Data/Uikits/Dropdown';
import { Card, CardBody, Col } from 'reactstrap';
import CommonDropDown from './Common/CommonDropDown';

const JustifyContents = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JustifyContent} span={JustifyData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            {JustifyList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default JustifyContents
