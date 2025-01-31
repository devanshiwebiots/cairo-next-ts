import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ProgressWithNumberStep } from '@/Constant'
import { ProgressNumberList, ProgressWithNumberStepsSpan } from '@/Data/Uikits/Progress'
import { Button, Card, CardBody, Col, Progress } from 'reactstrap'

const ProgressWithNumberSteps = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonUIkitsComponent title={ProgressWithNumberStep} span={ProgressWithNumberStepsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='position-relative m-3 progress-number'>
                    <Progress value="50" className="progress-wrapper" />
                    {ProgressNumberList.map(({className, color, number}, index) => (
                        <Button  size="sm" color={color} className={`position-absolute top-0 p-0 ${className} translate-middle rounded-circle`} style={{width: "2rem",height: "2rem",}}key={index}>{number}</Button>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default ProgressWithNumberSteps
