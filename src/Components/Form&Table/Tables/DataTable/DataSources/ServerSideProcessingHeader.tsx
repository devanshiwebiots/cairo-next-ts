import { ServerSideProcessingHeading } from '@/Constant'
import React from 'react'
import { CardHeader } from 'reactstrap'

const ServerSideProcessingHeader = () => {
  return (
     <CardHeader className='pb-0 card-no-border'>
        <h4 className='mb-2'>{ServerSideProcessingHeading}</h4>
        <span>There are many ways to get your data into DataTables, and if you are working with seriously large databases, you might want to consider using the server-side options that DataTables provides. With server-side processing enabled, all paging, searching, ordering actions that DataTables performs are handed off to a server where an SQL engine (or similar) can perform these actions on the large data set (after all, that's what the database engine is designed for!). As such, each draw of the table will result in a new Ajax request being made to get the required data.</span>
          <span>Server-side processing is enabled by setting the
            <code className="option" title="DataTables initialisation option">serverSide:option</code>option to <code>true</code> and providing an Ajax data source through the
            <code className="option" title="DataTables initialisation option">ajax:option</code>option.
          </span>
     </CardHeader>
  )
}

export default ServerSideProcessingHeader
