import { FactorAuthentication, ImagePath, TwoFactorAuthenticationHeading } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks'
import { setModalOne } from '@/Redux/Reducers/TwoFactorSlice';
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import ModalOne from './ModalOne';
import RatioImage from '@/CommonComponent/RatioImage';

const TwoFactorAuthentication = () => {
    const dispatch = useAppDispatch();
  return (
    <Col sm='12'>
        <Card>
            <CardBody className='authentication-body'>
                <div className='authentication-wrapper'>
                    <h4>{TwoFactorAuthenticationHeading}</h4>
                    <p>Click on the authentication button below and scan the QR code</p>
                    <RatioImage src={`${ImagePath}/forms/qr-scan.png`} alt=''/>
                </div>
                <Button tag="a" color="primary" className="mt-5" onClick={()=>dispatch(setModalOne())}>{FactorAuthentication}</Button>
                <ModalOne />
            </CardBody>
        </Card>
    </Col>
  )
}

export default TwoFactorAuthentication
