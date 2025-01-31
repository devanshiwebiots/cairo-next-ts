import React, { Fragment } from 'react'

const ProductColor = () => {
  return (
   <Fragment>
    <ul className="product-color" style={{marginTop:'10px'}}>
        <li className="bg-primary rounded-5"></li>
        <li className="bg-secondary"></li>
        <li className="bg-success"></li>
        <li className="bg-info"></li>
        <li className="bg-warning rounded-5"></li>
      </ul>
      <hr />
   </Fragment>
  )
}

export default ProductColor
