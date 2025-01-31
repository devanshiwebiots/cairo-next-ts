import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CustomFilteringSearch, SearchTableButton } from '@/Constant';
import { CustomFilteringList, FilteringTableColumn, FilteringTableData } from '@/Data/Form& Table/Table/DataTable/CustomFilteringData'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import TableSearchBar from './TableSearchBar';

const CustomFiltering = () => {
    const [data, setData] = useState(FilteringTableData)
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100)

    useEffect(() => {
        const filteredData = FilteringTableData.filter((item) => {
            const age = item.age
            return age >= minAge && age <= maxAge
        })
        setData(filteredData)
    },[minAge, maxAge])

    const handleMinAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
     setMinAge(parseInt(e.target.value, 10))
    }

    const handleMaxAgeChnage = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxAge(parseInt(e.target.value, 10))
    }


  return (
    <Col sm='12'>
        <Card className='basic-data-table'>
            <CommonCardHeader title={CustomFilteringSearch} span={CustomFilteringList} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <TableSearchBar handleMaxAgeChange={handleMaxAgeChnage} handleMinAgeChange={handleMinAgeChange}/>
                <div className='table-responsive user-datatable custom-scrollbar'>
                    <div id='datatable-range_wrapper' className='dataTables_wrapper'>
                        <DataTable className='theme-scrollbar' data={data} columns={FilteringTableColumn} striped highlightOnHover pagination/>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default CustomFiltering
