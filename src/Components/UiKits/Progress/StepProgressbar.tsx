import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { StepProgressbars } from "@/Constant";
import { StepProgressbarData, StepProgressbarSpan } from "@/Data/Uikits/Progress";
import { useState } from "react";
import { Check } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";

const StepProgressbar = () => {
  const [progressbar, SetProgressbar] = useState(StepProgressbarData);
  const handleClick = (id: number) => {
    SetProgressbar(progressbar.map((item) => (item.number === id ? { ...item, active: true } : item)));
  };
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CommonUIkitsComponent title={StepProgressbars} span={StepProgressbarSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="progress-showcase step-progress-wrapper">
          <div className="step-progress-box">
            <ul className="custom-scrollbar">
              {progressbar.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  <div className={`p-step ${item.step} ${item.active ? "active" : ""}`} onClick={() => handleClick(item.number)}>
                    <p>{item.number}</p>
                    <Check className="bookmark-search" />
                  </div>
                  <h6>{item.title}</h6>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepProgressbar;
