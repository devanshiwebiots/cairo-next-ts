import { Href } from '@/Constant'
import { LightThemeLeftSideData } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

const  LightThemeLeftSide = () => {
  return (
     <Col xl='6'>
        {LightThemeLeftSideData.map(({title, color}, index) => (
            <Fragment key={index}>
                <p className='mb-1'>{title}</p>
                <div className={`alert alert-light-${color}`}>
                    <p className={`txt-${color}`}>The <Link className={`alert-link txt-${color}`} href={Href}>{`"alert-light-${color}"`}</Link> class can be used to create an alert like this one.</p>
                </div>
            </Fragment>
        ))}
     </Col>
  )
}

export default  LightThemeLeftSide
