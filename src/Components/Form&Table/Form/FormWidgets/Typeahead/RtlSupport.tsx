import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RTLSupport } from "@/Constant";
import { CountryDataList, RtlSupportData } from "@/Data/Form&Table/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const RtlSupport = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={RTLSupport} span={RtlSupportData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div id="rtl-support">
            <Form className="theme-form">
              <div className="w-100">
                <Typeahead align="right" options={CountryDataList} placeholder="Countries" id="RTL Support" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RtlSupport;
