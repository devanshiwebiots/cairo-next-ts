import { Href } from "@/Constant";
import { TaskTagDataList } from "@/Data/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducers/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import { Fragment } from "react";
import { NavItem } from "reactstrap";

export const TaskTagData :React.FC<NavClassType> = ({ activeToggle }) => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.task);
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <Fragment>
      {TaskTagDataList.map((item) => (
        <NavItem key={item.id}>
          <a href={Href} className={activeTab === item.activeTab ? "show" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title"> {item.title}</span>
          </a>
        </NavItem>
      ))}
    </Fragment>
  );
};
