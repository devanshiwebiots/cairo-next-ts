import { Href } from '@/Constant'
import { LightThemeRightSideData } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

const LightThemeRightSide = () => {
  return (
    <Col xl='6'>
        {LightThemeRightSideData.map(({title, className, color}, index) => (
            <Fragment key={index}>
                <p className='mb-1'>{title}</p>
                <div className={`alert alert-light-${color}`}>
                    <p className={`txt-${className}`}>The <Link href={Href} className={`alert-link txt-${className}`}>{`"alert-light-${color}"`}</Link> class can be used to create an alert like this one.</p>
                </div>
            </Fragment>
        ))}
    </Col>
  )
}

export default LightThemeRightSide
