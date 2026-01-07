import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Href, ImagePath, ImageWithCloseBadgesCart } from '@/Constant'
import { ImageWithCloseBadgesData, ImageWithCloseBadgesSpan } from '@/Data/Uikits/TagAndPills'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ImageWithCloseBadges = () => {
  return (
   <Col className='col-12'>
    <Card>
        <CommonUIkitsComponent title={ImageWithCloseBadgesCart} span={ImageWithCloseBadgesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <div className='badge-spacing image-badges'>
                {ImageWithCloseBadgesData.map(({color, src, icon, title, className}, index) => (
                    <span className={`badge common-align txt-${color} rounded-pill badge-l-${color} ${className} rounded-pill border border-${color}`} key={index}>
                        <Image src={`${ImagePath}${src}`} className='rounded-circle me-1' alt="" width={24} height={24} unoptimized/> {title} 
                        <span className='vr mx-2'></span> <a href={Href}>{icon}</a>
                    </span>
                ))}
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default ImageWithCloseBadges
