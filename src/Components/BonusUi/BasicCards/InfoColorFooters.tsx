import { InfoColorFooterData } from "@/Data/BonusUi/BasicCard";
import { Fragment } from "react";
import CommonCard from "./Common/CommonCard";

const InfoColorFooters = () => {
  return (
    <Fragment>
      {InfoColorFooterData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </Fragment>
  );
};

export default InfoColorFooters;
