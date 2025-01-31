import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicTimelines } from '@/Constant'
import { BasicTimeLineData } from '@/Data/BonusUi/TimeLine'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicBasicTimeline from './DynamicBasicTimeline'

const BasicTimeline = () => {
  return (
     <Col xl='6' className='notification main-timeline'>
        <Card>
            <CommonCardHeader title={BasicTimelines} span={BasicTimeLineData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='dark-timeline mb-0'>
             <ul>
                <DynamicBasicTimeline />
             </ul>
            </CardBody>
        </Card>
     </Col>
  )
}

export default BasicTimeline
