import { Visitor } from '@/Constant'
import { VisitorChart } from '@/Data/Widgets/General'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import WidgetsCommonHeader from '../common/WidgetsCommonComp'

const Visitors = () => {
  return (
    <Col md='6'>
        <Card className='visitor-card'>
            <WidgetsCommonHeader title={Visitor}/>
            <CardBody>
                <div className='visitors-container'>
                    <ReactApexChart options={VisitorChart} series={VisitorChart.series} id='visitor-chart' type="bar" height={240}/>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default Visitors
