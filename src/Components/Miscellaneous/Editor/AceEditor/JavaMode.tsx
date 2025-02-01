import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import { JavaModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TypScriptData } from "@/Data/Editors";

const JavaMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JavaModeHeading} headClass="pb-0" />
        <CardBody>
          <Highlight theme={themes.vsDark} code={TypScriptData} language="Java">
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
export default JavaMode;
