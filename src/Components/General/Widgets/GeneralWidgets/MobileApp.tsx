import SVG from "@/CommonComponent/SVG";
import { Href, ImagePath } from "@/Constant";
import { TopGeneralData } from "@/Data/Widgets/General";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";

const MobileApp = () => {
  return (
    <Fragment>
      {TopGeneralData?.map((data, index) => (
        <Col xxl="2" md="4" sm="6" className={`${data.className}`} key={index}>
          <Card className={`mobile-app`}>
            <CardBody className={`${data.Secondclass}`}>
              <div className="app-design">
                <div className="d-flex">
                  <div className="flex-shrink-0 bg-light-primary me-2">
                    <SVG iconId={data.icon} />
                  </div>
                  <div className="flex-grow-1">
                    <h4>{data.title}</h4>
                    <span>{data.email}</span>
                  </div>
                </div>
              </div>
              <div className="client-budget">
                <ul>
                  <li>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className={`activity-${data.color}`}></div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <Link href={Href}>
                            <h6>Due Date</h6>
                            <span>{data.date}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      {data.color !== "secondary" && (
                        <div className="flex-shrink-0">
                          <div className={`activity-${data.color}`}></div>
                        </div>
                      )}
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <Link href={Href}>
                            <h6>Budget</h6>
                            <span>{data.Budget}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      {data.color === "secondary" && (
                        <div className="flex-shrink-0">
                          <div className={`activity-${data.color}`}></div>
                        </div>
                      )}
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <Link href={Href}>
                            <h6>Client</h6>
                            <span>{data.Client}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="user-details customers">
                <ul>
                  <li className="d-inline-block">
                    <Image src={`${ImagePath}/general-widgets/user/${data.image1}`} alt="" width={30} height={30} />
                  </li>
                  <li className="d-inline-block">
                    <Image src={`${ImagePath}/general-widgets/user/${data.image2}`} alt="" width={30} height={30} />
                  </li>
                  {data.image3 && (
                    <li className="d-inline-block">
                      <Image src={`${ImagePath}/general-widgets/user/${data.image3}`} alt="" width={30} height={30} />
                    </li>
                  )}
                </ul>
                <Button color={data.color}>{data.status}</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default MobileApp;
