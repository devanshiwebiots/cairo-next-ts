import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { PopoverDirections } from '@/Constant';
import { DirectionData, DirectionList } from '@/Data/Uikits/Popover';
import { Card, CardBody, Col } from 'reactstrap';
import CommonPopover from './Common/CommonPopover';

const PopoverDirection = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={PopoverDirections} span={DirectionData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='common-flex popover-wrapper'>
                {DirectionList.map((data) => (
                    <CommonPopover key={data.id} item={data}/>
                ))}
            </CardBody>
        </Card>
     </Col>
  )
}

export default PopoverDirection
