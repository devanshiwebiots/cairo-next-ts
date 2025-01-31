import { Button, Card, CardBody, Col } from "reactstrap";
import { BookmarkFilter, Href, ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBookmarkFilter } from "@/Redux/Reducers/BookmarkTabSlice";
import NavTab from "./NavTab";
import Image from "next/image";

const SideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()

  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <div className="d-flex align-items-center">
                    <div className="media-size-email">
                      <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="user" width={52} height={52}/>
                    </div>
                    <div className="flex-grow-1">
                      <h4 >MARK JENCO</h4>
                      <p>Markjecno@gmail.com</p>
                    </div>
                  </div>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;
