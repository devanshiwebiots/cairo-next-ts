import { AddTask, ToDoPlaceholder } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, setTask } from "@/Redux/Reducers/ToDoSlice";
import { toast } from "react-toastify";
import { Button, CardHeader, Input, InputGroup } from "reactstrap";

const ToDoHeader = () => {
  const { task } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleNewTask = () => {
    if (task.trim() === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(""));
      toast.success(`Task add ${task}`);
    }
  };

  const onTaskChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  return (
    <CardHeader className="b-bottom">
      <div className="todo-list-header">
        <InputGroup className="new-task-wrapper">
          <Input className="m-0" value={task} placeholder={ToDoPlaceholder} onChange={(e) => onTaskChanged(e)}></Input>
          <Button color="primary" size="sm" className="add-new-task-btn" onClick={handleNewTask}>
            {AddTask}
          </Button>
        </InputGroup>
      </div>
    </CardHeader>
  );
};

export default ToDoHeader;
