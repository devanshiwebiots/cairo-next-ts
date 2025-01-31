import { AssignedToMe, DelaydedTaks, MyTasks, Newsletter, Notification, NotiFications, ThisMonthTasks, ThisWeekTask, TodayTasks, UpcomingTasks } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import React from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import AssignedToMeClass from "./AssignedToMe";
import EmptyTaskClass from "./EmptyTaskClass";
import ListTask from "./ListTask";

const TabClass = () => {
  const { activeTab } = useAppSelector((state) => state.task);
  return (
    <Col xl="9" md="12" className="box-col-12">
      <div className="email-right-aside bookmark-tabcontent">
        <div className="email-body radius-left">
          <div className="ps-0">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ListTask />
              </TabPane>
              <TabPane tabId={'2'}>
                <EmptyTaskClass title={TodayTasks}/>
              </TabPane>
              <TabPane tabId={'3'}>
                <EmptyTaskClass title={DelaydedTaks}/>
              </TabPane>
              <TabPane tabId={'4'}>
                <EmptyTaskClass title={UpcomingTasks}/>
              </TabPane>
              <TabPane tabId={'5'}>
                <EmptyTaskClass title={ThisWeekTask}/>
              </TabPane>
              <TabPane tabId="6">
                  <EmptyTaskClass title={ThisMonthTasks} />
                </TabPane>
                <TabPane tabId={'7'}>
                    <AssignedToMeClass title={AssignedToMe}/>
                </TabPane>
                <TabPane tabId={'8'}>
                    <AssignedToMeClass title={MyTasks}/>
                </TabPane>
                <TabPane tabId="9">
                  <EmptyTaskClass title={Notification} />
                </TabPane>
                <TabPane tabId="10">
                  <EmptyTaskClass title={Newsletter} />
                </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TabClass;
