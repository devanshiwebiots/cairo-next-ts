import { useAppSelector } from "@/Redux/Hooks";
import { Fragment } from "react";
import { TabPane } from "reactstrap";
import StarredEmailContent from "./StarredEmailContent";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <TabPane tabId="3">
      <div className="mail-body-wrapper">
        <ul>
          {starBadges.length > 0 ? (
            inboxEmail.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className="inbox-data">
                    <StarredEmailContent data={data} ids={i} />
                  </li>
                )}
              </Fragment>
            ))
          ) : (
            <Fragment></Fragment>
          )}
        </ul>
      </div>
    </TabPane>
  );
};

export default StarredContent;
