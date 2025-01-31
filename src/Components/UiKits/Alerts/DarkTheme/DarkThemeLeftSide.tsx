import { Href } from '@/Constant'
import { DarkThemeLeftSideData } from '@/Data/Uikits/Alerts'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Alert, Col } from 'reactstrap'

const DarkThemeLeftSide = () => {
  return (
   <Col xl='6'>
     {DarkThemeLeftSideData.map(({title, color}, index) => (
        <Fragment key={index}>
        <p className='mb-1'>{title}</p>
        <Alert color={color} className='dark'>
            <p className='txt-light'>The <Link href={Href} className='alert-link text-white'>{`"alert-${color}"`}</Link> class can be used to create an alert like this one.</p>
        </Alert>
        </Fragment>
     ))}
   </Col>
  )
}

export default DarkThemeLeftSide
