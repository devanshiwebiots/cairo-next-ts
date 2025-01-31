import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { setOpenCus } from '@/Redux/Reducers/ThemeCustomizerSlice'
import React, { Fragment, useState } from 'react'
import NavCustomizer from './NavCustomizer'
import TabCustomizer from './TabCustomizer'

const ThemeCustomizer = () => {
    const [select, setSelect] = useState('sidebar-type')
    const dispatch = useAppDispatch()
    const {openCus} = useAppSelector((state) => state.themeCustomizer)

    const callbackNav = (select: string, open:boolean) => {
      setSelect(select)
      dispatch(setOpenCus(open))
    }
  return (
    <Fragment>
     <div className={`customizer-links ${openCus ? 'open' : ''}`}>
        <NavCustomizer callbackNav={callbackNav} selected={select}/>
     </div>
     <div className={`customizer-contain ${openCus ? 'open' : ''}`}>
        <TabCustomizer callbackNav={callbackNav} selected={select}/>
     </div>
    </Fragment>
  )
}

export default ThemeCustomizer
