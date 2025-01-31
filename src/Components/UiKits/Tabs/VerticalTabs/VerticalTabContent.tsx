import { TabContentProp } from "@/Types/UikitsType";
import { Col, TabContent, TabPane } from "reactstrap";

export const VerticalTabContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <Col md="8" xs="12">
      <TabContent activeTab={basicTab}>
        <TabPane tabId="1">
          <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <b className="text-danger">.nav</b>-powered navigation.</p>
        </TabPane>
        <TabPane tabId="2">
          <ul className="d-flex flex-column gap-1">
            <li>If you are a business owner, your website is absolutely one of the most important tools you have in your arsenal to get more - and better - clients and customers or a good one from a great one? Here are 10 qualities that a great website will need. Whether or not you end up retaining makespace based web designers, you should find them helpful:</li>
            <li>{`-->`} Navigation</li>
            <li>{`-->`} Visual Design</li>
            <li>{`-->`} Web Friendly</li>
            <li>{`-->`} Conversion</li>
          </ul>
        </TabPane>
        <TabPane tabId="3">
          <ul className="d-flex flex-column gap-1">
            <li>Available pages in Theme: </li>
            <li><strong> Typography: </strong> Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader.</li>
            <li> <strong> Tooltip: </strong> A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). </li>
          </ul>
        </TabPane>
        <TabPane tabId="4">
          <ul className="d-flex flex-column gap-1 p-sm-0 pt-2">
            <li><strong> Site purpose</strong> Like a mission statement, a website's purpose gives the primary reason for the site's existence in the world. Whether for education, advocacy, service provision, community organizing, etc.</li>
            <li><strong> Features</strong> It's important to figure out as many of these in advance as you can for the sake of a more coherent design. </li>
          </ul>
        </TabPane>
      </TabContent>
    </Col>
  );
};
