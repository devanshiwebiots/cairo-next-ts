import { useAppDispatch } from '@/Redux/Hooks'
import { fetchTaskApiData, setActiveTab } from '@/Redux/Reducers/TaskSlice'
import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import NavBarTask from './NavBarTask'
import TabClass from './TabClass'

const TaskContainer = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTaskApiData())
    },[dispatch])
    const activeToggle = (tab: string) => dispatch(setActiveTab(tab));
  return (
    <Container fluid>
        <div className='email-wrap bookmark-wrap'>
            <Row>
                <NavBarTask activeToggle={activeToggle}/>
                <TabClass />
            </Row>
        </div>
    </Container>
  )
}

export default TaskContainer
