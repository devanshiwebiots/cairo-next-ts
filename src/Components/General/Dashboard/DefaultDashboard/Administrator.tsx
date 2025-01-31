import { Href, New, SeeMoreAdministor, SophiaTaylor, Supervisor } from "@/Constant";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import Profile from "../../../../../public/assets/images/dashboard/user/profile.png";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import BrowserConfiguration from "./BrowserConfiguration";
import Image from "next/image";

const Administrator = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        <Col sm="12">
          <div className="card administrator">
            <DashboardCommonHeader title={Supervisor} />
            <div className="cart-body" style={{ padding: "18px" }}>
              <div className="administrator-admin">
                <div className="d-flex align-items-center gap-3">
                  <div className="position-relative">
                    <Image className="rounded-circle" src={Profile.src} alt="" width={45} height={45} />
                    <div className="status-circle bg-primary"></div>
                  </div>
                  <div>
                    <Link href={Href}>
                      <h5>
                        {SophiaTaylor} <span className="badge badge-primary ms-2">{New}</span>
                      </h5>
                    </Link>
                    <p className="mb-0">{SeeMoreAdministor}</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Link href={Href}>
                    <div className="admin-icons bg-light-primary">
                      <i className="fa fa-phone"></i>
                    </div>
                  </Link>
                  <Link href={Href}>
                    <div className="admin-icons bg-light-primary">
                      <i className="fa fa-commenting"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <BrowserConfiguration />
      </Row>
    </Col>
  );
};

export default Administrator;
