import { ButtonBadgesData } from '@/Data/Uikits/TagAndPills'
import React from 'react'

const ButtonBadgesBody = () => {
  return (
    <div className='badge-flex'>
      {ButtonBadgesData.map(({spanClass, buttonClass, title, badge}, index) => (
        <button className={`btn ${buttonClass}`} key={index}>
            {title}
            <span className={`badge ${spanClass}`}>{badge}</span>
        </button>
      ))}
    </div>
  )
}

export default ButtonBadgesBody
