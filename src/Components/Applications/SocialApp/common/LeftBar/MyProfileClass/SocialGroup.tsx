import { ImagePath } from "@/Constant";
import { SocialGroupData } from "@/Data/UserProfile";
import Image from "next/image";

const SocialGroup = () => {
  return (
    <ul className="justify-content-center">
      {SocialGroupData.map((data, i) => (
        <li key={i} className="d-inline-block">
          <Image src={`${ImagePath}/user/${data.imageName}`} className="img-40 rounded-circle" id={`UncontrolledTooltipExample-${i}`} alt="" width={40} height={40}/>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
