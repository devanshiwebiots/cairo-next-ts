import { productHeadingNum, ProductHeadingTitle, Productsoverview } from '@/Constant'
import { ProductsOverviewChart } from '@/Data/Ecommerce'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../common/DashboardCommonHeader'

const ProductsOverview = () => {
  return (
   <Col xxl='5' md='6' className='box-col-6'>
    <Card>
        <DashboardCommonHeader title={Productsoverview}/>
        <CardBody className='pb-0'>
            <div className='product-heading'>
                <h3>{productHeadingNum} <span>{ProductHeadingTitle}</span></h3>
            </div>
            <ReactApexChart options={ProductsOverviewChart} series={ProductsOverviewChart.series} id='orderoverview' type="line"  height={330}/>
        </CardBody>
    </Card>
   </Col>
  )
}

export default ProductsOverview
