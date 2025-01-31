import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavascriptModeTitle } from "@/Constant";
import { JavaData } from "@/Data/Editors";
// import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

const JavascriptMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JavascriptModeTitle} headClass="pb-0" />
        <CardBody>
          {/* <AceEditor className="aceEditor w-auto" mode={"javascript"} theme={"monokai"} value={JavaData} name="blah2" setOptions={{ useWorker: false }} fontSize={14} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} /> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptMode;
