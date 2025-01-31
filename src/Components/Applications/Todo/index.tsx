import { useAppDispatch } from '@/Redux/Hooks'
import { fetchTodoApiData } from '@/Redux/Reducers/ToDoSlice';
import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap';
import LeftUser from './LeftUser';
import TodoApp from './TodoApp';

const TodoContainer = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodoApiData())
    },[dispatch])
  return (
    <Container fluid className='email-wrap bookmark-wrap todo-wrap'>
        <Row>
            <LeftUser />
            <TodoApp />
        </Row>
    </Container>
  )
}

export default TodoContainer
