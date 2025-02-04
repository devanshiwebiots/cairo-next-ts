import { Button, ButtonGroup, Col } from "reactstrap";
import { Left, Middle, Right } from "@/Constant";
import { CommonGroupButtonProp } from "@/Types/ButtonType";
import { Fragment } from "react";

const CommonGroupButton:React.FC<CommonGroupButtonProp> = ({ data, buttonClass, size, outline }) => {
  return (
    <Fragment>
      {data.map((item, index) => (
        <Col xxl="4" md="6" sm="12" key={index}>
          <ButtonGroup className={buttonClass}>
            <Button outline={outline} size={size} color={item}>{Left}</Button>
            <Button outline={outline} size={size} color={item}>{Middle}</Button>
            <Button outline={outline} size={size} color={item}>{Right}</Button>
          </ButtonGroup>
        </Col>
      ))}
    </Fragment>
  );
};

export default CommonGroupButton;
