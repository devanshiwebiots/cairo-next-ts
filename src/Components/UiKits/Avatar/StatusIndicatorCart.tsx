import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, StatusIndicator } from '@/Constant'
import { StatusData, StatusIndicatorCartData } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const StatusIndicatorCart = () => {
  return (
    <Col xl='4' md='6' className='box-col-6' >
        <Card className='height-equal' style={{minHeight:'227.219px'}}>
            <CommonUIkitsComponent title={StatusIndicator} span={StatusData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='avatar-showcase'>
                <div className='avatars'>
                    <div className='avatar'>
                    <RatioImage className="img-100 rounded-circle" src={`${ImagePath}/user/1.jpg`} />
                    <div className="status bg-success"></div>
                    </div>
                    {StatusIndicatorCartData.map((data, i) => (
                        <div key={i} className='avatar ms-1'>
                            <RatioImage src={`${ImagePath}${data.src}`} className={`${data.className} rounded-circle`}/>
                            <div className={`status bg-${data.color}`}></div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default StatusIndicatorCart
