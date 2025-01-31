import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, Shapes } from '@/Constant'
import { ShapeData, ShapesCartList } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ShapesCart = () => {
  return (
     <Col xl='4' md='6' className='box-col-6' >
        <Card className=' height-equal' style={{minHeight:'227.219px'}}>
            <CommonUIkitsComponent title={Shapes} span={ShapeData} headClass='pb-0' spanClass='mb-0 mt-1'/>
            <CardBody className=' avatar-showcase'>
              <div className='avatars'>
                 <div className='avatar'>
                 <RatioImage className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="#"/>
                 </div>
                 {ShapesCartList.map((data, i) => (
                    <div className='avatar ms-1' key={i}>
                        <RatioImage src={`${ImagePath}${data.src}`} className={data.className}/>
                    </div>
                 ))}
              </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ShapesCart
