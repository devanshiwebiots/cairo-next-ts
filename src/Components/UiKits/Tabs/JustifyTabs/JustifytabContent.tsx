import { ImagePath } from "@/Constant";
import { Data } from "@/Data/Uikits/Tabs";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import { CardBody, TabContent, TabPane } from "reactstrap";

export const JustifytabContent:React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <CardBody className="px-0 pb-0">
      <TabContent activeTab={basicTab}>
        {Data.map(({ id, items }, index) => (
          <TabPane tabId={id} key={index}>
            <div className="designer-details">
              {items.map(({ src, title, number }, index) => (
                <div className="designer-profile" key={index}>
                  <div className="designer-wrap">
                    <Image className="designer-img" src={`${ImagePath}/${src}`} alt="profile" width={50} height={50}/>
                    <div className="designer-content">
                      <h6>{title}</h6>
                      <p> {number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </TabContent>
    </CardBody>
  );
};
