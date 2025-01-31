import React from 'react';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { AddProductTitle } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setFormValue } from '@/Redux/Reducers/AddProductSlice';
import FormEditors from './FormEditors';

const ProductOne = () => {
    const { formValue } = useAppSelector((state) => state.addProduct);
    const dispatch = useAppDispatch();

    const isProductNameValid = formValue.userName !== "";

    return (
        <div className='sidebar-body'>
            <Form>
                <Row className='g-2'>
                    <Col xs='12'>
                        <Label className='m-0 pt-0' check>{AddProductTitle} <span className='txt-danger'> *</span></Label>
                    </Col>
                    <Col xs='12'>
                        <div className='custom-input'>
                            <Input
                                className={isProductNameValid ? "valid" : "is-invalid"}
                                type='text'
                                required
                                name='userName'
                                onChange={(e) => dispatch(setFormValue({ name: 'userName', value: e.target.value }))}
                            />
                            {!isProductNameValid && (
                                <div className="invalid-feedback">
                                  A product name is required and recommended to be unique.
                                </div>
                            )}
                        </div>
                    </Col>
                    <FormEditors />
                </Row>
            </Form>
        </div>
    );
}

export default ProductOne;
