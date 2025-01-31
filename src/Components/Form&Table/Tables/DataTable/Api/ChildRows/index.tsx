import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ChildrenRowsTitle, SearchTableButton } from '@/Constant';
import { ChildRowColumn, ChildRowData } from '@/Data/Form& Table/Table/DataTable/ChildRowsData';
import { ZeroConfigurationData } from '@/Data/Form& Table/Table/DataTable/ZeroConfigurationData';
import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import CustomExpandableComponent from './CustomExpandableComponent';

const ChildRows = () => {
    const [filterText, setFilterText] = useState('')

    const filteredItems = ZeroConfigurationData.filter((item) =>item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = useMemo(() => {
        return (
          <div id="API-chield-row_filter" className="dataTables_filter d-flex align-items-center">
            <Label className="me-2">{SearchTableButton}:</Label>
            <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
          </div>
        );
      }, [filterText]);
  return (
     <Col sm='12'>
        <Card className='basic-data-table'>
            <CommonCardHeader title={ChildrenRowsTitle} span={ChildRowData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <div className='table-responsive'>
                    <div id='API-chield-row'>
                        <DataTable data={filteredItems} columns={ChildRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped highlightOnHover className='display theme-scrollbar' subHeader subHeaderComponent={subHeaderComponentMemo}/>
                    </div>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ChildRows
