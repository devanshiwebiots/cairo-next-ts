import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import SVG from '@/CommonComponent/SVG'
import { VerticalDoubleDividerr } from '@/Constant'
import { VerticalDoubleDividerData, VerticalDoubleDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const VerticalDoubleDivider = () => {
  return (
    <Col xxl="4" md="6" className="box-col-6">
    <Card className=" height-equal" style={{minHeight:' 345.203px'}}>
      <CommonUIkitsComponent title={VerticalDoubleDividerr} span={VerticalDoubleDividerSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
      
      <CardBody className="main-divider">
        <Row className="g-sm-2 d-flex double-divider gy-4">
          {VerticalDoubleDividerData.map((data, i) => (
            <Col key={i} sm="3" className="col-6">
              <div className="vertical-divider">
                <div className={`vertical-line bg-${data.color}`}></div>
                {data.isSVG ? <SVG iconId={data.iconId} className={`my-2 ${data.className}`} /> : <p className={`my-2 ${data.hasBorder ? `border border-${data.color}` : ""} ${data.className}`}>{data.title}</p>}
                <div className={`vertical-line bg-${data.color}`}></div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  </Col>
  )
}

export default VerticalDoubleDivider
