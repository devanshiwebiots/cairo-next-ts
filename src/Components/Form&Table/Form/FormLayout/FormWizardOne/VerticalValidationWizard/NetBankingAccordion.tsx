import { NetBanking, NetBankings, SelectYourBank } from '@/Constant'
import { NetBankingList } from '@/Data/Form& Table/Form'
import { NetBankingAccordionProp } from '@/Types/FormType'
import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import FeatherIconCom from './FeatherIconCom'

const NetBankingAccordion : React.FC<NetBankingAccordionProp>= ({ netBankingFormValues, getUserData}) => {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => (open === id ? setOpen('') : setOpen(id))
    const { bankName} = netBankingFormValues;
  return (
    <Accordion open={open} toggle={toggle} className='dark-accordion'>
        <AccordionItem>
            <AccordionHeader targetId='1' >{NetBanking}
             <FeatherIconCom iconName={open === '1' ? 'ChevronUp' : 'ChevronDown'} className='svg-color'/>
            </AccordionHeader>
            <AccordionBody accordionId='1' className='weight-title card-wrapper'>
                <h6 className='sub-title f-14'>{SelectYourBank}</h6>
                <Row className='choose-bank'>
                    {NetBankingList.map((data, i) => (
                        <Col sm='6' key={i}>
                            {data.bankList.map((banksNames, number) => (
                                <FormGroup check key={number} className='radio radio-primary'>
                                    <Input id={banksNames} type='radio' name='bankName' onChange={getUserData} checked={banksNames === bankName} value={banksNames}/>
                                   <Label htmlFor={banksNames} check>{banksNames} {number}</Label>
                                </FormGroup>
                            ))}
                        </Col>
                    ))}
                </Row>
            </AccordionBody>
        </AccordionItem>
    </Accordion>
  )
}

export default NetBankingAccordion


