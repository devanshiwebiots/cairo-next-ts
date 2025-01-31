import { InfoColorHeaderData } from "@/Data/BonusUi/BasicCard";
import CommonCard from "./Common/CommonCard";
import { Fragment } from "react";

const InfoColorHeader = () => {
  return (
    <Fragment>
      {InfoColorHeaderData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </Fragment>
  );
};

export default InfoColorHeader;
