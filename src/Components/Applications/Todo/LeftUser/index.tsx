import { Href, ToDoFilter } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { setShowSideBar } from "@/Redux/Reducers/ToDoSlice";
import { Button, Card, CardBody, Col } from "reactstrap";
import SideBarNav from "./SideBarNav";
import UserDetail from "./UserDetail";

const LeftUser = () => {
  const { showSideBar } = useAppSelector((state) => state.todo);
  return (
    <Col xxl="3" xl="4" className="box-col-30">
      <div className="email-sidebar md-sidebar">
        <Button color="primary" tag={"a"} className="email-aside-toggle md-sidebar-toggle" href={Href} onClick={() => setShowSideBar()}>
          {ToDoFilter}
        </Button>
        <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <UserDetail />
                <SideBarNav />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default LeftUser;
