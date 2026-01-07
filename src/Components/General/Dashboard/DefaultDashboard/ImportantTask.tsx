import { Href, ImagePath, ImportantTask } from "@/Constant";
import { ImportantTaskData } from "@/Data/Dashboard";
import Link from "next/link";
import { CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import Image from "next/image";

const ImportantTaskList = () => {
  return (
    <Col sm="12">
      <div className="card">
        <DashboardCommonHeader title={ImportantTask} />
        <CardBody>
          <Row className="gy-3">
            {ImportantTaskData.map((item, index) => (
              <Col key={index} xl="3" md="6">
                <div className="card shadow-none border mb-0">
                  <div className="card-header pb-0">
                    <div className="header-top">
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                  <CardBody className="designer-card">
                    <div className="d-flex align-items-center gap-2">
                      <div className="flex-shrink-0">
                        <Image src={`${ImagePath}/dashboard/user/${item.image}`} alt="user" width={40} height={40} unoptimized/>
                      </div>
                      <div className="flex-grow-1">
                        <Link href={Href}>
                          <h6>{item.name}</h6>
                        </Link>
                        <p>{item.email}</p>
                      </div>
                    </div>
                    <div className="design-button">
                      <button className={`btn bg-light-${item.laugColor} font-${item.laugColor} f-w-500`}>{item.laug}</button>
                      <button className={`btn bg-light-${item.postColor} font-${item.postColor} f-w-500 ms-1`}>{item.post}</button>
                    </div>
                    <h6 className="pb-2">Task Completed: {item.taskCom}</h6>
                    <div className="progress sm-progress-bar">
                      <div className={`progress-bar bg-${item.color}`} role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <div className="ratting-button">
                      <div className="d-flex align-items-center gap-2 mb-0">
                        <div className="flex-shrink-0">
                          <p className="f-w-500">{item.problem}</p>
                        </div>
                        <div className="flex-grow-1">
                          <span className="f-w-500">Problem</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-0">
                        <div className="flex-shrink-0">
                          <p className="f-w-500">{item.finished}</p>
                        </div>
                        <div className="flex-grow-1">
                          <span className="f-w-500">Finished</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-0">
                        <div className="flex-shrink-0">
                          <p className="f-w-500">{item.remark}</p>
                        </div>
                        <div className="flex-grow-1">
                          <span className="f-w-500">Remark</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </div>
    </Col>
  );
};

export default ImportantTaskList;
