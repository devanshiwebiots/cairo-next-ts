import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import { Configuration, ImagePath, Interactionborswer } from '@/Constant';
import { DashBoardBroweserList } from '@/Data/Dashboard';
import DashboardCommonHeader from '../../Dashboard/common/DashboardCommonHeader';
import { DashBoardBroweserListWidget } from '@/Data/Widgets/General';
import RatioImage from '@/CommonComponent/RatioImage';

const BrowserConfigurationWidget = () => {
  const defaultIndex = DashBoardBroweserList.findIndex(item => item.image.toLowerCase().includes('chrome'));
  const [clickedIndex, setClickedIndex] = useState<number | null>(defaultIndex);

  return (
    <Col xl='3' sm='6'>
      <div className='card browser-status'>
        <DashboardCommonHeader title={Configuration} />
        <div className='card-body'>
          <p className='mb-1'>{Interactionborswer}</p>
          <ul className='browser-used'>
            {DashBoardBroweserListWidget?.map((item, index: number) => (
              <li key={index} className={clickedIndex === index ? 'active' : ''}>
                <div className='brow-label'>
                  {clickedIndex === index && <span>{item.score}</span>}
                  <i className="fa fa-caret-down" />
                </div>
                <div className='browser-box' onClick={() => setClickedIndex(index)}>
                  <RatioImage className="img-fluid" src={`${ImagePath}/dashboard/browser/${item.image}`} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
}

export default BrowserConfigurationWidget;
