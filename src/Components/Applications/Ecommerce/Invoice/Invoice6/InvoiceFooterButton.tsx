import { Cancel, Print } from '@/Constant';
import { InvoicePrintType } from '@/Types/EcommerceType';
import React from 'react';
import { Button, Col } from 'reactstrap';

const InvoiceFooterButton: React.FC<InvoicePrintType> = ({handlePrint}) => {

  return (
    <Col sm='12' className='text-center mt-3'>
      <Button color='primary' className='me-2'  onClick={handlePrint}>{Print}</Button>
      <Button color='secondary'>{Cancel}</Button>
    </Col>
  )
}

export default InvoiceFooterButton
