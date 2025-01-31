import { Href, UnderlineOpacitys } from "@/Constant";
import { UnderlineOpacityData } from "@/Data/Uikits/NavigateLinks";
import Link from "next/link";
import { Col } from "reactstrap";

const UnderlineOpacity = () => {
  return (
    <Col sm="6" xxl="3">
      <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title">{UnderlineOpacitys}</h6>
        <div className="underline-opacity-wrapper">
          {UnderlineOpacityData.map(({ opacity }, index) => (
            <p key={index}>
              <Link href={Href} className={`link-offset-2 link-underline link-underline-opacity-${opacity}`}>
                Underline opacity {opacity}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default UnderlineOpacity;
