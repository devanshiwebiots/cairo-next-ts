import SVG from "@/CommonComponent/SVG";
import { CheckAll, NotiFications } from "@/Constant";
import { NotificationData } from "@/Data/Layout";
import Link from "next/link";

export const Notification = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="Bell" />
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h5 className="f-18 f-w-600 mb-0 dropdown-title">{NotiFications}</h5>
        <ul>
          {NotificationData.map((item, index) => (
            <li className="d-flex align-items-center" key={index}>
              <div className={`flex-shrink-0 bg-light-${item.color} text-${item.color}`}>
               {item.icon}
              </div>
              <div className="flex-grow-1">
                <Link href={`/chat/private_chat`}><h6>{item.title}</h6></Link>
                <span className="pull-right">{item.time}</span>
              </div>
            </li>
          ))}
          <li><Link className="btn btn-primary w-100" href={`/chat/private_chat`}>{CheckAll}</Link></li>
        </ul>
      </div>
    </li>
  );
};
