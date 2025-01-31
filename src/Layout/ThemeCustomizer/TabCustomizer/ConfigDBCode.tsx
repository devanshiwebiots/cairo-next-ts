import ConfigDB from "@/Config/ThemeConfig";
import { useAppSelector } from "@/Redux/Hooks";
import { Container, Row } from "reactstrap";

const ConfigDBCode = () => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const configDB = ConfigDB.data;
  return (
    <Container className="bd-example-row" fluid>
      <Row>
        <p>{"To replace our design with your desired theme. Please do configuration as mention"} </p>
        <p><b> {"Path : src > config > ThemeConfig.ts "}</b></p>
      </Row>
      <pre>
        <code>
          <div> {"export class ConfigDB "}&#123;</div>
          <div>  {"static data"} = &#123;</div>
          <div>    {"settings"}&#58; &#123;</div>
          <div>      {"layout_type"}&#58; {configDB.settings.layout_type},</div>
          <div>      {"sidebar"}&#58; &#123;</div>
          <div>        {"type"}&#58; {layout},</div>
          <div>      &#125;,</div>
          <div>    &#125;,</div>
          <div>    {"color"}&#58; &#123;</div>
          <div>      {"primary_color"}&#58; {configDB.color.primary_color},</div>
          <div>      {"secondary_color"}&#58; {configDB.color.secondary_color},</div>
          <div>      {"mix_background_layout"}&#58; {configDB.color.mix_background_layout},</div>
          <div>     &#125;,</div>
          <div>   &#125;</div>
          <div> &#125;</div>
        </code>
      </pre>
    </Container>
  );
};

export default ConfigDBCode;
