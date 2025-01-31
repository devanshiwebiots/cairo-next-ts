import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { RegisterStepData } from "@/Data/pageAuth";
import { RegisterWizadListProp } from "@/Types/AuthType";
import Image from "next/image";
import Link from "next/link";

export const RegisterWizadList: React.FC<RegisterWizadListProp> = ({ level }) => {
  return (
    <ul className="theme-scrollbar anchor">
      <li>
        <Link className="logo text-start ps-0" href={`/dashboard/default_dashboard`}>
          <Image className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage" width={114} height={38}/>
          <Image className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage" width={114} height={38}/>
        </Link>
      </li>
      {RegisterStepData.map((data, index) => (
        <li key={index}>
          <Link href={`#step-${index}`} className={`${level === index + 1 ? "selected" : level > index + 1 ? "done" : "disabled"}`}>
            <h4>{index + 1}</h4>
            <h5>
              {data.tittle}
              {data.tittle === "Done" ? <i className="fa fa-thumbs-o-up ms-1" /> : " "}
            </h5>
            <small>{data.detail}</small>
          </Link>
        </li>
      ))}
      <li>
        <RatioImage src={`${ImagePath}/login/icon.png`} alt="looginpage" />
      </li>
    </ul>
  );
};
