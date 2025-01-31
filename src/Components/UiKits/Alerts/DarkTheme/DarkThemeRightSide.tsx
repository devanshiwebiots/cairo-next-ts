import { Href } from '@/Constant'
import { DarkThemeRightSideData } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

const DarkThemeRightSide = () => {
  return (
     <Col xl='6'>
        {DarkThemeRightSideData.map(({title, color, className}, index) => (
            <Fragment key={index}>
                <p className='mb-1'>{title}</p>
                <div className={`alert alert-${color} dark`}>
                    <p className={`txt-${className}`}>The <Link className={`alert-link text-${className}`} href={Href}>{`"alert-${color}"`}</Link> class can be used to create an alert like this one.</p>
                </div>
            </Fragment>
        ))}
     </Col>
  )
}

export default DarkThemeRightSide
