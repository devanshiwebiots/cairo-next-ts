import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import DashboardCommonHeader from '../common/DashboardCommonHeader';
import { Configuration, ImagePath, Interactionborswer } from '@/Constant';
import { DashBoardBroweserList } from '@/Data/Dashboard';
import RatioImage from '@/CommonComponent/RatioImage';

const BrowserConfiguration = () => {
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  return (
    <Col sm='12'>
      <Card className='browser-status'>
        <DashboardCommonHeader title={Configuration} />
        <CardBody>
          <p className='mb-1'>{Interactionborswer}</p>
          <ul className='browser-used'>
            {DashBoardBroweserList?.map((item, index) => (
              <li key={index} className={clickedIndex === index ? 'active' : ''}>
                <div className='brow-label'>
                  <span>{clickedIndex === index ? item.score : ''}</span>
                  <i className="fa fa-caret-down"></i>
                </div>
                <div className='browser-box' onClick={() => setClickedIndex(index)}>
                  <RatioImage className="img-fluid" src={`${ImagePath}/dashboard/browser/${item.image}`} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

export default BrowserConfiguration;