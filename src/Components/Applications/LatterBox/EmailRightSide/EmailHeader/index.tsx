import { SearchFile } from '@/Constant'
import React from 'react'
import { Input, Label } from 'reactstrap'
import EmailNavTab from './EmailNavTab'
import RightDropDown from './RightDropDown'

const EmailHeader = () => {
  return (
    <div className='mail-header-wrapper'>
        <div className='mail-header'>
            <div className='form-check form-check-inline'>
                <Input className='form-check-input checkbox-primary' type='checkbox' id='emailCheckboxA' defaultValue={'option1'}/>
                <Label className='form-check-label' for='emailCheckboxA'></Label>
                <EmailNavTab />
            </div>
        </div>
        <div className='mail-body'>
            <div className='mail-search d-flex-align-items-center'>
                <Input type='text' placeholder={SearchFile}/>
                <i className="fa fa-search" />
            </div>
            <div className='light-square bg-light-info txt-info'>
            <i className="fa fa-refresh" />
            </div>
            <div className='light-square bg-light-danger txt-danger' role={'main'} >
            <i className="fa fa-trash" />
            </div>
            <RightDropDown />
        </div>
    </div>
  )
}

export default EmailHeader
