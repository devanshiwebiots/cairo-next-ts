import { GridOptionHeadData } from '@/Data/Uikits/Grid'
import React from 'react'

const GridOptionsHead = () => {
  return (
    <thead>
        <tr>
            <th></th>
            <th className='text-center'>
                <p>Extra small</p><small>&lt;576px</small>
            </th>
            {GridOptionHeadData.map(({ text, size, className }, index) => (
                <th className='text-center' key={index}>
                    <p>{text}</p><small className={className ? className : ""}>{size}</small>
                </th>
            ))}
        </tr>
    </thead>
  )
}

export default GridOptionsHead
