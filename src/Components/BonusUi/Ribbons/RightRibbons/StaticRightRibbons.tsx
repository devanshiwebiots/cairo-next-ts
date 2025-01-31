import React from 'react'
import { Col } from 'reactstrap';

const StaticRightRibbons = () => {
    const RibbonAndTagText: string = " frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.";
  const RibbonAndTag: string = "ribbon and tag";
  return (
    <Col sm="6" xl="4">
      <div className="ribbon-wrapper border border-1 height-equal" style={{minHeight:'225.391px'}}>
        <div className="ribbon ribbon-dark ribbon-right">50% OFF</div>
        <p>
          The <em className="txt-danger">{RibbonAndTag}</em>
          {RibbonAndTagText}
        </p>
      </div>
    </Col>
  )
}

export default StaticRightRibbons
