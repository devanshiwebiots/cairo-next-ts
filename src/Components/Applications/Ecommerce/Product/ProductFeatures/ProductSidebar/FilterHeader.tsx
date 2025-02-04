import { Filters } from '@/Constant'
import { useAppDispatch } from '@/Redux/Hooks'
import { setSideBarOn } from '@/Redux/Reducers/FilterSlice'
import React from 'react'
import { CardHeader } from 'reactstrap'

const FilterHeader = () => {
    const dispatch = useAppDispatch()
  return (
    <CardHeader>
        <h4 className='mb-0 f-w-500'>
            {Filters}
            <span className='pull-right' onClick={() => dispatch(setSideBarOn())}>
            <i className="fa fa-chevron-down toggle-data fs-6"></i>
            </span>
        </h4>
    </CardHeader>
  )
}

export default FilterHeader
