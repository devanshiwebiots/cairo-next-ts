import { DalbultCaslin, EmailAddress, ExampleTextarea, ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import { CardBody, Form, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";

export const BorderTabContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <p className="pt-3">This is some placeholder content the <b>Home tab's</b> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <b>.nav</b>-powered navigation.To convey the active state to assistive technologies, use the <b>aria-current</b> attribute — using the page value for current page, or true for the current item in a set. The base <b>nav</b> component is built with flexbox and provide a strong foundation for building all types of navigation components.</p>
      </TabPane>
      <TabPane tabId="2">
         <CardBody className="pb-0">
          <div className="main-inbox"> 
            <div className="header-inbox"> 
              <div className="header-left-inbox">
                <div className="inbox-img"><Image src={`${ImagePath}/ecommerce/06.jpg`} alt="profile" width={50} height={50}/></div>
                <div className="inbox-content"> 
                  <h6>{DalbultCaslin}</h6>
                  <p className="text-muted">stroman.rogers@gmail.com</p>
                </div>
              </div>
              <ul className="header-right-inbox">
                <li><p>8 JAN 11:30PM</p></li>
                <li> <i className="txt-danger icofont icofont-ui-delete" /></li>
                <li> <i className="icofont icofont-telegram" /></li>
              </ul>
            </div>
            <div className="body-inbox mt-2">
              <div className="body-h-wrapper"><i className="me-2 tab-space icofont icofont-star" /><em>Compare Prices Find the Best Computer Assessors Fronted Issue.</em></div>
              <p className="pt-2">Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.</p>
            </div>
          </div>
        </CardBody>
      </TabPane>
      <TabPane tabId="3">
        <CardBody className="px-0 pb-0"> 
          <Form> 
            <FormGroup>
              <Label check htmlFor="exampleFormControltwo">{EmailAddress}</Label>
              <Input id="exampleFormControltwo" type="email" placeholder="youremail@gmail.com" />
            </FormGroup>
            <div className="mb-0">
              <Label check htmlFor="exampleFormControlTextarea1">{ExampleTextarea}</Label>
              <Input type="textarea" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </Form>
        </CardBody>
      </TabPane>
    </TabContent>
  );
};
