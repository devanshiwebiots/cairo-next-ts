import { PositionedBadgesData, PositionedBadgesData1 } from '@/Data/Uikits/TagAndPills'
import React from 'react'

const PositionedBadgesBody = () => {
  return (
    <div className='badge-flex'>
      {PositionedBadgesData.map(({spanClass, title, buttonClass, Badge}, index) => (
        <button className={`btn ${buttonClass}`} type='button' key={index}>
            {title}
            <span className={spanClass}>{Badge}</span>
        </button>
      ))}
      {PositionedBadgesData1.map(({spanClass, title, buttonClass, Badge, spanBage}, index) => (
        <button className={`btn ${buttonClass}`} type='button' key={index}>
            {title}
            <span className={spanClass}><span className={spanBage}>{Badge}</span></span>
        </button>
      ))}
    </div>
  )
}

export default PositionedBadgesBody
