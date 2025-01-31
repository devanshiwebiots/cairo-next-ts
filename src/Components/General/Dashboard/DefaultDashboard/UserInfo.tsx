import SVG from "@/CommonComponent/SVG";
import { happeningStore, Href, UpgradePlan, Welcome } from "@/Constant";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import { Col } from "reactstrap";
import VanillaTilt from "vanilla-tilt";
import hand from "../../../../../public/assets/images/dashboard/hand.gif";
import welcomeBg from "../../../../../public/assets/images/dashboard/welcome-bg.png";
import Image from "next/image";

interface HTMLImageElementWithTilt extends HTMLImageElement {
  vanillaTilt?: any;
}

const UserInfo = () => {
  const tiltRef = useRef<HTMLImageElementWithTilt>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 1000,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <Fragment>
      <Col xl="4" md="6" className="col-12">
        <div className="card welcome-banner">
          <div className="card-header p-0">
            <div className="welcome-card">
              <img ref={tiltRef} className="w-100 img-fluid js-tilt" src={welcomeBg.src} alt=""/>
            </div>
          </div>
          <div className="card-body">
            <h1 className="m-0">
              {Welcome} <Image src={hand.src} alt="" width={30} height={30} />
            </h1>
            <p>{happeningStore}</p>
            <div className="d-flex align-items-end justify-content-between">
              <Link href={Href} className="btn btn-pill btn-primary">
                {UpgradePlan}
              </Link>
              <div className="clock">
                <SVG className="stroke-icon" iconId="watch" />
                10:25 AM
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default UserInfo;
