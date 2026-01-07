import { AuthorizedSign, ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const InvoiceSign = () => {
  return (
    <td>
      <Image src={`${ImagePath}/email-template/invoice-1/sign.png`} alt="sign" width={154} height={49} unoptimized/>
      <span style={{display: "block",background: "rgba(82, 82, 108, 0.3)",height: 1,width: 200,marginBottom: 10,}}/>
      <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{AuthorizedSign}</span>
    </td>
  )
}

export default InvoiceSign
