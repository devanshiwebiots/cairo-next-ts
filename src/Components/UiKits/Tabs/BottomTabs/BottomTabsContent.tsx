import { Css, ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import React from "react";
import { TabContent, TabPane } from "reactstrap";

const BottomTabsContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId={"1"}>
        <div className="common-flex">
          <Image src={`${ImagePath}/tree/html.png`} alt="" width={20} height={20} unoptimized/>
          <h5>{Css}</h5>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>{`"One of the three main web technologies is CSS. The terms "cascading" and "style," with cascading indicating how one style can cascade from another, are actually the key to understanding CSS, which stands for Cascading Style Sheets."`}</p>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>To specify how HTML code will appear on a website, utilize CSS.</p>
        </div>
      </TabPane>
      <TabPane tabId={"2"}>
        <div className="common-flex">
          <Image src={`${ImagePath}/tree/vendor.png`} alt="" width={20} height={20} unoptimized/>
          <h5>Vendors</h5>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>To improve the development of your website, find a carefully chosen list of premier suppliers. Use our dependable network to locate the ideal partners for the accomplishment of your project.</p>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>Cutting-edge design tools, or specialized services, our curated list ensures you have access to the best resources for a seamless and successful website development experience.</p>
        </div>
      </TabPane>
      <TabPane tabId={"3"}>
        <div className="common-flex"><Image src={`${ImagePath}/tree/js.png`} alt="" width={20} height={20} unoptimized/>
          <h5>Javascript</h5>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>{`Development of interactive and adaptable websites is made possible by JavaScript, the web's dynamic programming language.`}</p>
        </div>
        <div className="tab-paragraph">
          <i className="fa fa-arrow-circle-o-right"></i>
          <p>Building strong and interactive online apps requires JavaScript, which is essential for everything from enabling asynchronous requests to designing captivating user interfaces.</p>
        </div>
      </TabPane>
    </TabContent>
  );
};

export default BottomTabsContent;
