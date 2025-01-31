import { Development, Href } from '@/Constant'
import { DevelopmentCategoriesData } from '@/Data/Learning'
import Link from 'next/link'
import React from 'react'
import { Badge } from 'reactstrap'

const DevelopmentCategories = () => {
  return (
    <div className='categories pt-0'>
      <div className='learning-header'>
        <span className='f-w-500 pt-3'>{Development}</span>
      </div>
        <ul>
            {DevelopmentCategoriesData.map(({title, badge}, index) => (
                <li key={index}>
                    <Link href={Href}>{title}</Link> <Badge color='primary' className='pull-right'>{badge}</Badge>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DevelopmentCategories
