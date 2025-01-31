import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import ContactEdit from "./ContactEdit";

const RightChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.Chat)
  
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <RatioImage className="img-fluid rounded-circle" src={`${ImagePath}/${selectedUser?.image ? `${selectedUser?.image}` : "avtar/3.jpg"}`} alt="user"/>
            <div className="status bg-success" />
          </div>
          <div>
            <span>{selectedUser?.name ? selectedUser?.name : "Cameron Williamson"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert">
            <i className="icon-info-alt" />
          </div>
          <ContactEdit dropClass="chat-alert"  />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;
