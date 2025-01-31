import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { IconsCommonProps } from '@/Types/IconType'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';

const ThemifyIconCard: React.FC<IconsCommonProps> = ({title, parentCallback, iconType}) => {
    const getITag = (tag: string) => {
        parentCallback(tag);
      };
  return (
  <Col sm='12'>
     <Card>
        <CommonCardHeader title={title} headClass='pb-0'/>
        <CardBody>
            <Row className='icon-lists'>
                {iconType.map((icon ,i) => (
                    <Col sm='6' lg='4' key={i} onClick={() => getITag(icon)}>
                         <i className={`${icon}`}></i> {icon}
                    </Col>
                ))}
            </Row>
        </CardBody>
     </Card>
  </Col>
  )
}

export default ThemifyIconCard
