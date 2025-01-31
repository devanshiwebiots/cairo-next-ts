import { Button, Card, CardBody } from "reactstrap";
import { Fragment } from "react";
import { DefaultType } from "@/Types/ButtonType";
import CommonCardHeading from "./CommonCardHeading";
import CommonButtonsToolTip from "./CommonButtonsToolTip";

const CommonButtons: React.FC<DefaultType> = ({ commonButtonsData, title, subTitle, className, raised, borderRadius, btnPill, btnAir }) => {
  return (
    <Card>
    <CommonCardHeading smallHeading={title} span={subTitle} headingClassName='pb-0'/>
    <CardBody>
      <div className="btn-showcase">
        {commonButtonsData.map((data, index) => (
          <Fragment key={index}>
              <Button 
                className={`${className ? className : ""} ${data.className ? data.className : ""} ${raised ? `btn-air-${data.color}` : ""} ${raised ? `btn-air-${data.colorTag}` : ""} ${btnPill ? "btn-pill" : ""} ${btnAir ? `btn-air-${data.color}` : ""}`}  
                outline={data.outline} 
                active={data.active} 
                disabled={data.disabled} 
                size={data.size ? data.size : ""} 
                id={data.id ? data.id : ""} 
                color={data.color}
                style={{ borderRadius: borderRadius }}
              >
              {data.tittle}
            </Button>
            {data.id && <CommonButtonsToolTip toolTipText={data.toolTipText ? data.toolTipText : ""} id={data.id ? data.id : ""} />}
          </Fragment>
        ))}
      </div>
    </CardBody>
  </Card>
  );
};

export default CommonButtons;
