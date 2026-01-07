import { Href, ImagePath, TaskFilter } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setTaskFilter } from "@/Redux/Reducers/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import React, { useCallback, useState } from "react";
import { PlusCircle } from "react-feather";
import { Button, Card, CardBody, Col, Nav, NavItem } from "reactstrap";
import CreateTag from "./CreateTag";
import NewTask from "./NewTask";
import { TaskTagData } from "./TaskTagData";
import { TaskViewData } from "./TaskViewData";
import Image from "next/image";

const NavBarTask: React.FC<NavClassType> = ({ activeToggle }) => {
  const [tagModal, setTagModal] = useState(false);
  const { taskFilter } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tagCallback = useCallback((modal: boolean) => {
    setTagModal(modal);
  }, []);

  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button color="primary" onClick={() => dispatch(setTaskFilter())} className="md-sidebar-toggle" href={Href}>
          {TaskFilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${taskFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark task-sidebar">
                  <div className="d-flex">
                    <div className="media-size-email">
                      <Image src={`${ImagePath}/user/user.png`} className="me-3 rounded-circle" alt="" width={52} height={52} unoptimized/>
                    </div>
                    <div className="flex-grow-1">
                      <h4>MARK JENCO</h4>
                      <p>Markjecno@gmail.com</p>
                    </div>
                  </div>
                  <Nav className="main-menu">
                    <NavItem>
                        <NewTask />
                    </NavItem>
                    <NavItem>
                        <span className="main-title">Views</span>
                    </NavItem>
                    <TaskViewData activeToggle={activeToggle}/>
                    <NavItem><hr /></NavItem>
                    <NavItem>
                        <span className="f-w-700 main-title">Tags <span className="pull-right" onClick={() => {setTagModal(true)}}><PlusCircle /></span></span>
                    </NavItem> 
                    <CreateTag tagCallback={tagCallback} tagModal={tagModal} setTagModal={setTagModal}/>
                    <TaskTagData activeToggle={activeToggle}/>
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NavBarTask;
