import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, Ratio } from '@/Constant'
import { RatioData, RationCartData } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const RatiosCart = () => {
  return (
     <Col md='6' className='box-col-6'>
        <Card className='height-equal' style={{minHeight:'227.219px'}}>
            <CommonUIkitsComponent title={Ratio} span={RatioData} headClass='pb-0' spanClass='mb-0 mt-1'/>
            <CardBody className=' avatar-showcase'>
                <div className='avatars'>
                    <div className='avatar ratio'>
                        <RatioImage src={`${ImagePath}/avtar/11.jpg`} className='b-r-8 img-100'/>
                    </div>
                    {RationCartData.map((data, i) => (
                        <div key={i} className='avatar ratio ms-1'>
                            <RatioImage src={`${ImagePath}${data.src}`} className={`b-r-8 ${data.className}`}/>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default RatiosCart
