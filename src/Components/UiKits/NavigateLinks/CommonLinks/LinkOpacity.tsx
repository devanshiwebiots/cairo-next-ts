import { Href, Linkopacity } from "@/Constant";
import { LinkOpacityData } from "@/Data/Uikits/NavigateLinks";
import Link from "next/link";
import { Col } from "reactstrap";

const LinkOpacity = () => {
  return (
    <Col sm="6" xxl="3">
      <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title">{Linkopacity}</h6>
        <div className="link-opacity-wrapper">
          {LinkOpacityData.map(({ opacity }, index) => (
            <p key={index}>
              <Link href={Href} className={`link-opacity-${opacity}`}>
                Link opacity {opacity}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default LinkOpacity;
