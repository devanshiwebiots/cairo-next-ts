import { WebDesigner, WebDesigns } from '@/Constant'
import { CommonWebData } from '@/Data/Uikits/Modal'
import React, { Fragment } from 'react'
import { ArrowRightCircle, ChevronsRight } from 'react-feather'

const WebDesign = () => {
  return (
   <Fragment>
    <div className='large-modal-header'><ChevronsRight /><h5>{WebDesigns}</h5></div>
    <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
      <h5 className="f-w-600">{WebDesigner}</h5>
      {CommonWebData.map(({ title, className ,pClassName}, index) => (
        <div className={`d-flex ${className}`} key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className={`mb-0 ${pClassName && pClassName}`}>{title}</p></div>
        </div>
      ))}
   </Fragment>
  )
}

export default WebDesign
