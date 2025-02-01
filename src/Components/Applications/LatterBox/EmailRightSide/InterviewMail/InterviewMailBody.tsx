import { ImagePath, Send } from "@/Constant";
import { MailPropsType } from "@/Types/LatterBoxType";
import React, { Ref } from "react";
import { ChevronDown } from "react-feather";
import { Button } from "reactstrap";
import InboxOption from "./InboxOption";
import UserFooter from "./UserFooter";
import UserMailBody from "./UserMailBody";
import RatioImage from "@/CommonComponent/RatioImage";

const InterviewMailBody = React.forwardRef(({handlePrintData}:MailPropsType, ref:Ref<HTMLDivElement> | undefined) => {
  return (
    <div ref={ref}>
        <div className="mail-body-wrapper">
        <div className="user-mail-wrapper">
        <div className="user-title">
          <div>
            <div className="rounded-border">
              <RatioImage className="img-fluid" src={`${ImagePath}/user/12.png`} alt="user"/>
            </div>
            <div className="dropdown-subtitle">
              <p>Ronald Richards</p>
              <div className="onhover-dropdown">
                <Button color="transparent" className="p-0 dropdown-button">
                  To me <ChevronDown/>
                </Button>
                <div className="inbox-security onhover-show-div">
                  <p>From: <span>pixelstrap &lt;pixelstrap3@gmail.com&gt;</span></p>
                  <p>to: <span>donut.horry@gmail.com</span></p>
                  <p>reply-to:<span>&lt;pixelstrap3@gmail.com&gt;</span></p>
                  <p>date: <span>Jun 13, 2023, 7:10 AM</span></p>
                  <p>subject: <span>Important Account Security Update</span></p>
                  <p>security: <span>standard encryption (TLS)</span></p>
                </div>
              </div>
            </div>
          </div>
          <InboxOption handlePrintData={handlePrintData}  />
        </div>
        <UserMailBody />
        <UserFooter />
        <div className="send-btn">
          <Button color="primary">{Send}<i className="fa fa-paper-plane" /></Button>
        </div>
      </div>
        </div>
    </div>
  );
});

export default InterviewMailBody;
