import { InfoColorBodyData } from "@/Data/BonusUi/BasicCard";
import { Fragment } from "react";
import CommonCard from "./Common/CommonCard";

const InfoColorBody = () => {
  return (
    <Fragment>
      {InfoColorBodyData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </Fragment>
  );
};

export default InfoColorBody;
