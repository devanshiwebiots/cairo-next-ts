import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavascriptModeTitle } from "@/Constant";
import { JavaData } from "@/Data/Editors";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const JavascriptMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JavascriptModeTitle} headClass="pb-0" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={JavaData} language="javascript">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptMode;
