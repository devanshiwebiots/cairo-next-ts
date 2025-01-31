import { CartDataHeaderr } from '@/Data/Ecommerce'
import React from 'react'

const CartDataHeader = () => {
  return (
    <thead>
        <tr>
            {CartDataHeaderr.map((item, i) => (
                <th key={i}>{item}</th>
            ))}
        </tr>
    </thead>
  )
}

export default CartDataHeader
