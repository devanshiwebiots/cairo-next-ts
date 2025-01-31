import ShowError from '@/Components/Other/common/ShowError';
import { SavedAddress, ShippingInformation, ShippingMethod } from '@/Constant';
import { BillingFormProp } from '@/Types/FormType';
import React, { ChangeEvent, useState } from 'react';
import { Button } from 'reactstrap';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import ShippingMethods from './ShippingMethods';
import AddAddressModal from './AddAddressModal'; 

const ShippingFormContent: React.FC<BillingFormProp> = ({ callbackActive }) => {
    const [radioBoxValues, setRadioBoxValues] = useState({ address: '', shippingMethod: '' });
    const { address, shippingMethod } = radioBoxValues;
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setRadioBoxValues({ ...radioBoxValues, [name]: value });
    };

    const handleNextButton = () => {
        if (address !== '' && shippingMethod !== '') {
            callbackActive(3);
        } else {
            ShowError();
        }
    };

    return (
        <div className='shipping-wizard'>
            <h5>{ShippingInformation}</h5>
            <p className='f-light'>Fill up the following information to send you the order</p>
            <div className='shipping-title'>
                <h5 className='mb-2'>{SavedAddress}</h5>
                <Button color="primary" className='btn' onClick={toggleModal}>
                    <i className="fa fa-plus-square f-20"></i>
                </Button>
            </div>
            <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData} />
            <h5 className='mt-4 mb-2'>{ShippingMethod}</h5>
            <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton} />
            
            <AddAddressModal isOpen={modalOpen} toggle={toggleModal} />
        </div>
    );
};

export default ShippingFormContent;
