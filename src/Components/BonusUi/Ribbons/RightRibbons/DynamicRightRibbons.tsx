import { RightRibbonDataList } from '@/Data/BonusUi/Ribbons'
import { RibbonProp } from '@/Types/BonusUiType'
import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

const DynamicRightRibbons = () => {
  return (
   <Fragment>
     {RightRibbonDataList.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className={`border border-1 height-equal ${className ? className : ""}`} style={{minHeight:'225.391px'}}>
            <div className={`ribbon ${ribbonClass}`}>
              {title && title}
              {icon && icon}
            </div>
            <p>
              {span.map(({ spanText, text }, index) => (
                <Fragment key={index}>
                  {text && text}
                  {spanText && <em className="txt-danger">{spanText}</em>}
                </Fragment>
              ))}
            </p>
          </div>
        </Col>
      ))}
   </Fragment>
  )
}

export default DynamicRightRibbons
