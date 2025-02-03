import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RaisedCancel, RaisedComments, RaisedEmailAddress, RaisedEmailAddressPlaceholder, RaisedPassword, RaisedPasswordPlaceholder, RaisedSelectYourFavoritePixelstrapTheme, RaisedSubmit, RaiseInputStyles, SelectTheColorYouLikeBelow } from "@/Constant";
import { RaisedColorDataList, RaisedDataList, RaisedInputStyleData } from "@/Data/Form&Table/Form";
import React from "react";
import { Button, Card, CardBody, CardFooter, Col, Form } from "reactstrap";
import CommonSelectInput from "../Common/CommonSelectInput";
import CommonRaisedInput from "./Common/CommonRaisedInput";

const RaiseInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RaiseInputStyles} span={RaisedInputStyleData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <Form className="theme-form dark-inputs">
          <CardBody>
            <CommonRaisedInput inputType="email" label={RaisedEmailAddress} placeholder={RaisedEmailAddressPlaceholder} />
            <CommonRaisedInput inputType="password" label={RaisedPassword} placeholder={RaisedPasswordPlaceholder} />
            <CommonSelectInput label={RaisedSelectYourFavoritePixelstrapTheme} inputClass="input-air-primary" span={RaisedDataList} />
            <CommonSelectInput label={SelectTheColorYouLikeBelow} inputClass="input-air-primary" span={RaisedColorDataList} multiple />
            <CommonRaisedInput inputType="textarea" label={RaisedComments} rows={4} />
          </CardBody>
          <CardFooter className="text-end">
            <Button color="primary" className="me-3">
              {RaisedSubmit}
            </Button>
            <Button color="light" type="reset">
              {RaisedCancel}
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
