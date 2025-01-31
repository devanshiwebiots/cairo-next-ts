import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import RatioImage from '@/CommonComponent/RatioImage'
import { BadgeIndicatortxt, ImagePath } from '@/Constant'
import { BadgeIndicatorData, BadgeIndicatorList } from '@/Data/Uikits/avatars'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BadgeIndicator = () => {
  return (
    <Col xl='4' md='6' className='box-col-6'>
        <Card className='height-equal' style={{minHeight:'227.219px'}}>
            <CommonUIkitsComponent title={BadgeIndicatortxt} span={BadgeIndicatorData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className=' avatar-showcase'>
                <div className='avatars badge-avatar'>
                    <div className='avatar'>
                        <RatioImage src={`${ImagePath}/user/1.jpg`} className='img-100 rounded-circle'/>
                        <div className="badge badge-success position-absolute rounded-circle top-0 start-0">A</div>
                    </div>
                    {BadgeIndicatorList.map((data, i) => (
                        <div className='avatar ms-1' key={i}>
                            <RatioImage src={`${ImagePath}${data.src}`} className={`${data.className} rounded-circle`}/>
                            <div className={`${data.classNameBdge}`}>{data.bage}</div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BadgeIndicator
