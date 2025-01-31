import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClickIt, ImageRichMessages } from '@/Constant';
import { ImageRichMessageData } from '@/Data/BonusUi/Sweetalert2';
import React from 'react';
import { Button, Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';

const ImageRichMessage = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "	https://unsplash.it/400/200",
            imageAlt: "Custom image",
            confirmButtonText: "Okay",
        });
    };

    return (
        <Col xxl='3' xl='4' sm='6' className='box-col-6'>
            <Card>
                <CommonCardHeader title={ImageRichMessages} span={ImageRichMessageData} spanClass='mt-1 mb-0' headClass='pb-0'/>
                <CardBody>
                    <Button color='success' onClick={handleClick}>{ClickIt}</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ImageRichMessage;
