import React, { useState } from 'react'
import { AlertOctagon, AlertTriangle, Octagon, Triangle } from 'react-feather';
import { Alert, Col } from 'reactstrap'

const OutlineAlertRightSide = () => {
    const [visible, setVisible] = useState(true)
    const [visibleTwo, setVisibleTwo] = useState(true)
    const onDismiss = () => setVisible(false);
    const onDismissTwo = () => setVisibleTwo(false);
  return (
    <Col xl='6'>
        <Alert color='' className='txt-warning double-border border-warning alert-icons' isOpen={visible} toggle={onDismiss}>
            <AlertTriangle />
            <p className="txt-warning">The <b className="txt-warning">"double-border"</b>&<b className="txt-warning">"border-warning" </b>class has the ability to generate on its own alerts.</p>
            <button className="btn-close" type="button" onClick={onDismiss}></button>
        </Alert>
        <Alert color='' className='txt-danger inset-border border-danger outline-2x alert-icons' isOpen={visibleTwo} toggle={onDismissTwo}>
            <AlertOctagon />
            <p className="txt-danger">The <b className="txt-danger">"inset-border"</b>with <b className="txt-danger">"border-danger" </b>class has the ability to generate on its own alerts.</p>
            <button className="btn-close" type="button" onClick={onDismissTwo}></button>
        </Alert>
    </Col>
  )
}

export default OutlineAlertRightSide
