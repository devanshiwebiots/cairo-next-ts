import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import RatioImage from '@/CommonComponent/RatioImage'
import { Animatedavatar, ImagePath } from '@/Constant'
import { AnimatedAvatarSpan, AnimatedAvtarData } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const AnimatedAvatar = () => {
  return (
   <Col xl='4' className='box-col-6'> 
    <Card className='height-equal' style={{minHeight:'227.219px'}}>
        <CommonUIkitsComponent title={Animatedavatar} span={AnimatedAvatarSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody className='avatar-showcase'>
            <div className='avatars'>
                <div className='avatar'>
                    <RatioImage src={`${ImagePath}/user/1.jpg`} className='img-100 rounded-circle'/>
                    <div className="status bg-success animation-ping"></div> 
                </div> 
                {AnimatedAvtarData.map((data, i) => (
                    <div className='avatar ms-1' key={i}> 
                        <RatioImage src={`${ImagePath}${data.src}`} className={`${data.className} rounded-circle`}/>
                        <div className={`status bg-${data.color} animation-ping`}></div>
                    </div>
                ))}
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default AnimatedAvatar
