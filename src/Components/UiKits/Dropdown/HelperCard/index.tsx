import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { HelperCards } from '@/Constant'
import { HelperData } from '@/Data/Uikits/Dropdown'
import { Card, CardBody, Col } from 'reactstrap'
import { AlertCard } from './AlertCard'
import { HelperCart } from './HelperCart'
import { WarningCard } from './WarningCard'

const HelperCard = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonCardHeader title={HelperCards} span={HelperData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='dropdown-basic m-0'>
                <div className='common-flex custom-helper-card'>
                    <HelperCart />
                    <WarningCard />
                    <AlertCard />
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default HelperCard
