import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, FlatButtonHeading, GradientButtonsHeading, OutlineButtonsHeading, RaisedWithEdgeButtonsHeading, SizingButtonsHeading } from "@/Constant";
import { ActiveButtonsData, ActiveButtonsSubTitle, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonsSubTitle, DefaultButtonsData, DefaultButtonsHeadingData, DisabledButtonsData, DisabledButtonsHeadingData, FlatButtonData, GradientButtonsData, GradientButtonsSubTitle, LargeButtonsData, OutlineButtonsData, OutlineButtonsHeadingData, RaisedWithEdgeButtonsData, SizingButtonsData } from "@/Data/Buttons/DefaultStyle";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";

const DefaultStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonsHeading} subTitle={DefaultButtonsHeadingData} borderRadius="8px" />
          <CommonButtons commonButtonsData={DefaultButtonsData} title={FlatButtonHeading} subTitle={FlatButtonData} borderRadius="0px" />
          <CommonButtons commonButtonsData={DefaultButtonsData} title={RaisedWithEdgeButtonsHeading} subTitle={RaisedWithEdgeButtonsData} btnPill={true} btnAir={true} />
          <CommonButtons commonButtonsData={LargeButtonsData} title={SizingButtonsHeading} subTitle={SizingButtonsData} borderRadius="8px" />
          <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsSubTitle} borderRadius="8px" />
          <CommonButtons commonButtonsData={DisabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} borderRadius="8px" />
          <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsSubTitle} />
          <CommonButtons commonButtonsData={GradientButtonsData} title={GradientButtonsHeading} subTitle={GradientButtonsSubTitle} />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultStyleContainer;
