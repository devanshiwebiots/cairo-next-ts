import { useAppSelector } from "@/Redux/Hooks";
import InboxEmailContent from "./InboxEmailContent";
import { TabPane } from "reactstrap";
import MailPagination from "./MailPagination";

const InboxContent = () => {
  const { inboxEmail, page } = useAppSelector((state) => state.letterBox);

  return (
    <TabPane tabId="1" >
      <div className="mail-body-wrapper">
        <ul>
          {inboxEmail.map((data, i) => (
            <li className={`inbox-data ${page ? i < 8 ? "hidden" : "" : i < 8 ? "" : "hidden" }`} key={i}>
              <InboxEmailContent data={data} ids={i} />
            </li>
          ))}
        </ul>
        <MailPagination />
      </div>
    </TabPane>
  );
};

export default InboxContent;
