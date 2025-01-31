import { ImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";

const TabPaneTwo = () => {
  return (
    <div className="flex-space align-items-center list-light-dark contact-profile">
      <Image className="tab-img" src={`${ImagePath}/avtar/3.jpg`} alt="profile" width={100} height={100}/>
      <ul className="d-flex flex-column gap-2">
        <li>
          <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020
        </li>
        <li>
          <strong>Mail Us:</strong>contact@us@gmail.com
        </li>
        <li>
          <strong>Contact Number: </strong>(954) 357-7760
        </li>
      </ul>
    </div>
  );
};

export default TabPaneTwo;
