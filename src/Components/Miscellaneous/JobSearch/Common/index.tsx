import { JobFilterData } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import Filter from './Filter';
import Industry from './Industry';
import JobTitle from './JobTitle';
import Location from './Location';

const Sidebar = () => {
    const [filterToggle, setFilterToggle] = useState(false);
    const toggle = () => setFilterToggle(!filterToggle)
  return (
     <Fragment>
      <Button color='primary' className='email-aside-toggle md-sidebar-toggle' onClick={toggle}>{JobFilterData}</Button>
      <div className={`md-sidebar-aside job-sidebar ${filterToggle ? "open" : ""}`}>
        <div className='default-according style-1 faq-accordion job-accordion'>
            <Filter />
            <Location />
            <JobTitle />
            <Industry />
        </div>
      </div>
     </Fragment>
  )
}

export default Sidebar
