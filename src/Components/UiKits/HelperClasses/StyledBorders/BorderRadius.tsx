import { BorderRadiusheading } from "@/Constant";
import { BorderRadiusData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

const BorderRadius = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h5 className="mb-3">{BorderRadiusheading}</h5>
        {BorderRadiusData.map((data, i) => (
          <div className="helper-common-box" key={i}>
            <div className={`helper-box ${data.title} bg-light border`}></div>
            <span>{data.title}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default BorderRadius;
