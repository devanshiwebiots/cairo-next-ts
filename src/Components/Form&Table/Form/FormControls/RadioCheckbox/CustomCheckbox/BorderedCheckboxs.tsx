import { Col, Input, Label } from "reactstrap";
import { BorderedCheckbox, PrimaryCheckboxPrimary } from "@/Constant";
import { BorderCheckboxData } from "@/Data/Form&Table/Form";

export const BorderedCheckboxs = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{BorderedCheckbox}</h6>
        {BorderCheckboxData.map(({ color, text }, index) => (
          <div className={`form-check checkbox checkbox-${color} mb-0`} key={index}>
            <Input id={`checkbox-${color}`} type="checkbox" />
            <Label htmlFor={`checkbox-${color}`} check>
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  );
};
