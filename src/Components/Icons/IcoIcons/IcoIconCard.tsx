import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { IconsCommonProps } from '@/Types/IconType'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';

const IcoIconCard: React.FC<IconsCommonProps> = ({iconType, title, parentCallback}) => {
    const getITag = (tag: string) => {
        parentCallback(tag);
      };
  return (
   <Card>
    <CommonCardHeader title={title} headClass='pb-0'/>
    <CardBody>
        <Row className='icon-lists'>
            {iconType.map((item, i) => (
                <Col sm='6' xs='12' key={i} onClick={() => getITag(item)}>
                  <i className={`icofont icofont-${item}`}/>{item}
                </Col>
            ))}
        </Row>
    </CardBody>
   </Card>
  )
}

export default IcoIconCard
