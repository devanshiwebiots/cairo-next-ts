import { Card, CardBody, Col } from "reactstrap";
// import AceEditor from "react-ace";
import { CSSModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CssData } from "@/Data/Editors";

const CssMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={CSSModeHeading} headClass="pb-0" />
        <CardBody>
          {/* <AceEditor className="aceEditor w-auto" mode="css" theme="monokai" value={CssData} name="blah2" setOptions={{ useWorker: false }} fontSize={14} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} /> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;
