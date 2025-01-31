// import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";
import { HTMLModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HtmlData } from "@/Data/Editors";

const HtmlMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={HTMLModeHeading} headClass="pb-0" />
        <CardBody>
          {/* <AceEditor className="aceEditor w-auto" mode="html" theme="monokai" value={HtmlData} name="blah2" fontSize={14} setOptions={{ useWorker: false }} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} /> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlMode;
