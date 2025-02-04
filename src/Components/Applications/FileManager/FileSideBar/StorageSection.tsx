import { Storage, StorageData } from '@/Constant'
import React, { Fragment } from 'react'
import { Database } from 'react-feather'
import { Button, Progress } from 'reactstrap'

const StorageSection = () => {
  return (
    <Fragment>
        <ul>
            <li>
                <Button outline color='primary' className='progress-text w-100'><Database />{Storage}</Button>
                <div className='m-t-15'>
                    <Progress color='primary' style={{height:'8px'}} value='25' className='sm-progress-bar mb-3'/>
                    <h6>{StorageData}</h6>
                </div>
            </li>
        </ul>
        <hr style={{ opacity: 0.25}}/>
    </Fragment>
  )
}

export default StorageSection
