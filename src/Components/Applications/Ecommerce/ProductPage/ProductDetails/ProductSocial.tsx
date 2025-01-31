import { ShareIt } from '@/Constant'
import { ProductSocialLinks } from '@/Data/Ecommerce'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col, Form, Row } from 'reactstrap'

const ProductSocial = () => {
  return (
  <Fragment>
    <Row>
        <Col md='4'>
            <h5 className='f-w-600 product-title'>{ShareIt}</h5>
        </Col>
        <Col md='8'>
            <div className='product-icon'>
                <ul className='product-social'>
                    {ProductSocialLinks.map((item, index) => (
                        <li key={index} className='d-inline-block'>
                            <Link href={item.link} target='_blank'>
                                 <i className={`fa fa-${item.text}`}></i>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Form className="d-inline-block f-right"></Form>
            </div>
        </Col>
    </Row>
    <hr />
  </Fragment>
  )
}

export default ProductSocial
