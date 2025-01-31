import { ProductBrandData } from '@/Data/Ecommerce'
import React from 'react'
import { Card, CardBody } from 'reactstrap'

const ShippingDetails = () => {
  return (
    <Card>
        <CardBody>
            <div className='collection-filter-block'>
                <ul className='pro-services'>
                    {ProductBrandData.map((item, index) => (
                        <li key={index}>
                            <div className='d-flex'>
                                {item.icon}
                                <div className='flex-grow-1'>
                                    <h5>{item.text}</h5>
                                    <p>{item.span}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </CardBody>
    </Card>
  )
}

export default ShippingDetails
