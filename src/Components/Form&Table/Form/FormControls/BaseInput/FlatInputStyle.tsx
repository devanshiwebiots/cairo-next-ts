import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FlatInputStyles, PleaseDoComments, SelectYourFavoriteRomanNumber, SelectYourMultiplePaintings } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonSelectInput from "./Common/CommonSelectInput";
import { FlateStyleDataList, FlatInputStyleList, FlatInputTypeData } from "@/Data/Form& Table/Form";

const FlatInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyles} span={FlatInputTypeData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <Form className="theme-form dark-inputs">
          <CardBody>
            <CommonSelectInput label={SelectYourFavoriteRomanNumber} inputClass="btn-square" span={FlatInputStyleList} />
            <CommonSelectInput label={SelectYourMultiplePaintings} inputClass="btn-square custom-scrollbar" span={FlateStyleDataList} multiple />
            <Row>
              <Col>
                <FormGroup>
                  <Label check>{PleaseDoComments}</Label>
                  <Input type="textarea" className="btn-square" rows={3}></Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
