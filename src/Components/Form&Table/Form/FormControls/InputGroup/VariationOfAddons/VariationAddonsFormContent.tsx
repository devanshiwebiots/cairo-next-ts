import { FlatStyle, JointAddon, LeftAddon, LeftAddonPlaceholder, LeftAndRight, LeftAndRightAddon, RaiseStyle, RightAddon, RightAddonPlaceholder, SolidStyle } from '@/Constant'
import React from 'react'
import { Form, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

const VariationAddonsFormContent = () => {
  return (
    <Form>
        <div className='mb-3 m-form__group'>
            <Label>{LeftAddon}</Label>
            <InputGroup>
             <InputGroupText className='list-light-primary'>
                <i className="icofont icofont-pencil-alt-5 txt-primary"/>
             </InputGroupText>
             <Input type='text' placeholder={LeftAddonPlaceholder}/>
            </InputGroup>
        </div>
        <div className='mb-3'>
            <Label>{RightAddon}</Label>
            <InputGroup>
             <Input type='text' placeholder={RightAddonPlaceholder}/>
             <InputGroupText className='list-light-danger'>
             <i className="icofont icofont-ui-dial-phone txt-danger"/>
             </InputGroupText>
            </InputGroup>
        </div>
        <div className='mb-3'>
            <Label>{JointAddon}</Label>
            <InputGroup>
             <InputGroupText className='list-light-primary'><i className="icofont icofont-unlink txt-primary"/></InputGroupText>
             <InputGroupText>{'0.00'}</InputGroupText>
             <Input type='text'/>
            </InputGroup>
        </div>
        <div className='mb-3'>
            <Label>{LeftAndRightAddon}</Label>
            <InputGroup>
             <InputGroupText className='list-light-danger'><i className="icofont icofont-ui-zoom-out txt-danger"/></InputGroupText>
             <Input type='text'/>
             <InputGroupText className='list-light-danger'><i className="icofont icofont-ui-zoom-in txt-danger"/></InputGroupText>
            </InputGroup>
        </div>
        <div className='mb-3 input-group-solid'>
            <Label>{SolidStyle}</Label>
            <InputGroup>
             <InputGroupText className='list-light-primary'><i className="icofont icofont-users txt-primary"/></InputGroupText>
             <Input type='text' placeholder='999999'/>
            </InputGroup>
        </div>
        <div className='mb-3  input-group-square'>
            <Label>{FlatStyle}</Label>
            <InputGroup>
             <InputGroupText className='list-light-danger'><i className="icofont icofont-credit-card txt-danger"/></InputGroupText>
             <Input type='text' placeholder=''/>
            </InputGroup>
        </div>
        <div className='mb-3 input-group-square'>
            <Label>{RaiseStyle}</Label>
            <InputGroup>
             <InputGroupText className='list-light-primary'><i className="icofont icofont-download txt-primary"/></InputGroupText>
             <Input type='text' className='input-group-air' placeholder='https://www.example.com'/>
            </InputGroup>
        </div>
        <div className='mb-3 input-group-square'>
            <Label>{LeftAndRight}</Label>
            <InputGroup className='pill-input-group'>
                <InputGroupText className='list-light-danger'><i className="icofont icofont-ui-copy txt-danger"/></InputGroupText>
                <Input type='text'/>
                <InputGroupText className='list-light-danger'><i className="icofont icofont-stock-search txt-danger"/></InputGroupText>
            </InputGroup>
        </div>
    </Form>
  )
}

export default VariationAddonsFormContent
