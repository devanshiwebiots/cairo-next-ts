import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { ImageBadgesCart, ImagePath } from '@/Constant'
import { ImageBadgesData, ImageBadgesSpan } from '@/Data/Uikits/TagAndPills'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ImageBadges = () => {
  return (
   <Col xl='6'>
     <Card>
        <CommonUIkitsComponent title={ImageBadgesCart} span={ImageBadgesSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <div className='badge-spacing image-badges'>
                {ImageBadgesData.map(({color, text, src, className}, index) => (
                    <span className={`badge common-align txt-${color} rounded-pill badge-l-${color} ${className} rounded-pill border border-${color}`} key={index}>
                        <Image className='rounded-circle me-1' src={`${ImagePath}${src}`} alt='' width={24} height={24} unoptimized/> {text}
                    </span>
                ))}
            </div>
        </CardBody>
     </Card>
   </Col>
  )
}

export default ImageBadges
