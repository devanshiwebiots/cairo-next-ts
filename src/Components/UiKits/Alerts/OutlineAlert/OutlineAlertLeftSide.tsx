import React, { useState } from 'react'
import { Clock, ThumbsUp } from 'react-feather'
import { Alert, Button, Col } from 'reactstrap'

const OutlineAlertLeftSide = () => {
  const [visible, setVisible] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(true);

  const onDismiss = () => setVisible(false);
  const onDismissTwo = () => setVisibleTwo(false);
  return (
    <Col xl='6'>
      <Alert color='' isOpen={visible} toggle={onDismiss} className="txt-primary border-primary">
        <Clock />
        <p className='txt-primary'>The <b>"border-primary" </b>class has the ability to generate on its own alerts.</p>
        <button className='btn-close' type='button' onClick={onDismiss}></button>
      </Alert>
      <Alert color='' isOpen={visibleTwo} toggle={onDismissTwo} className='txt-success border-success outline-2x alert-icons'>
        <ThumbsUp />
        <p className="txt-success">The <b className="txt-success">"border-success" </b>with <b className="txt-success">"outline-2x" </b>class has ability to generate on its own alerts.</p>
        <button className="btn-close" type="button" onClick={onDismissTwo}></button>
      </Alert>
    </Col>
  )
}

export default OutlineAlertLeftSide
