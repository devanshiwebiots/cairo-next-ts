import { HeaderWithIconPropsTypes } from '@/Types/UserProfile'
import React from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Button, CardHeader } from 'reactstrap'

const HeaderWithIcon: React.FC<HeaderWithIconPropsTypes> = ({setIsOpen, isOpen, Heading}) => {
  return (
    <CardHeader>
        <h2 className='mb-0'>
            <Button block color='transparent' className='btn-link text-start d-flex justify-content-between' onClick={() => setIsOpen(!isOpen)}>
                {Heading}
                {isOpen  ? (<ChevronDown className='m-0'/>) : (<ChevronUp className='m-0'/>)}
            </Button>
        </h2>
    </CardHeader>
  )
}

export default HeaderWithIcon
