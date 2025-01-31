import { OrderLists } from '@/Constant'
import React from 'react'
import { Col } from 'reactstrap'

const OrderList = () => {
  return (
    <Col md='6' xxl='3'>
       <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title fw-bold">{OrderLists}</h6>
        <ol>
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>Structurally, it's still a list.</li>
          <li>
          However, this style only applies to immediate child elements.
          </li>
          <li>Nested lists:
            <ol>
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ol>
            </li>
          <li>This may still come in handy in some situations.</li>
        </ol>
      </div>
     </Col>
  )
}

export default OrderList
