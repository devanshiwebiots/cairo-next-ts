import { Href } from '@/Constant'
import { IconsWithAlertsData } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React from 'react'
import { Alert, Col } from 'reactstrap'

const IconsWithAlertsLeftSide = () => {
  return (
    <Col xl='6'>
        {IconsWithAlertsData.map(({color, icon},index) => (
            <Alert className={`d-flex align-items-center`} color={color} key={index}>
                <div>{icon}</div>
                <span className='txt-light'>Use <Link href={Href} className='alert-link text-white'>{`"alert-${color}"`}</Link> and <Link href={Href} className='alert-link text-white'>{`"stroke-${color}"`}</Link> classes for alerts like this one. </span>
            </Alert> 
        ))}
    </Col>
  )
}

export default IconsWithAlertsLeftSide
