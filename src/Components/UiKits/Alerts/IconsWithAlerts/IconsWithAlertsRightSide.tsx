import { Href } from '@/Constant'
import { IconsWithAlertsDataRight } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React from 'react'
import { Alert, Col } from 'reactstrap'

const IconsWithAlertsRightSide = () => {
  return (
    <Col xl='6'>
        {IconsWithAlertsDataRight.map(({color, icon, className}, index) => (
           <Alert className='d-flex align-items-center' color={color} key={index}>
            <div>{icon}</div>
            <span className={`txt-${className}`}>Use <Link href={Href} className={`alert-link text-${className}`}></Link> and <Link href={Href} className={`alert-link text-${className}`}>{`"stroke-${color}"`}</Link> classes for alerts like this one.</span>
           </Alert>
        ))}
    </Col>
  )
}

export default IconsWithAlertsRightSide
