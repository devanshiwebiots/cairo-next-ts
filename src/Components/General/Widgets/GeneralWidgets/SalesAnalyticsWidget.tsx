import { Salesanalytic } from '@/Constant'
import { SalesAnalyticsChart, SalesAnalyticsData } from '@/Data/Dashboard'
import { SalesanalyticChartWidget } from '@/Data/Widgets/General'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, Col } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboard/common/DashboardCommonHeader'

const SalesAnalyticsWidget = () => {
  const pendingColor = '#FFB70D'; 
  const completeColor = '#007BFF'; 


  const colors = SalesAnalyticsData?.map((item) => {
    if (item.status === 'Pending') {
      return pendingColor;
    } else if (item.status === 'Complete') {
      return completeColor;
    } else {
      return '#CCCCCC';
    }
  });

  const updatedChartOptions = {
    ...SalesAnalyticsChart,
    colors: colors,
  };

  return (
    <Col xl='6' lg='5' md='6'>
        <Card className='sales-chart'>
                <DashboardCommonHeader title={Salesanalytic}/>
            <div className='card-body'>
                <ul>
                    {SalesAnalyticsData?.map((item, index) => (
                        <li key={index} className='me-2'>
                            <span className={`circle bg-${item.color} me-1`}></span>
                            <p>{item.status} <span>{item.price}</span></p>
                        </li>
                    ))}
                </ul>
                <div className='legend'>
                    <ReactApexChart id='sales-analytics' options={SalesanalyticChartWidget} series={SalesanalyticChartWidget.series} type="area" height={274} />
                </div>
            </div>
        </Card>
    </Col>
  )
}

export default SalesAnalyticsWidget;
