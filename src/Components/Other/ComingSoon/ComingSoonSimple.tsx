import { ImagePath, WeAreComingSoon } from "@/Constant";
import Image from "next/image";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const ComingSoonSimpleContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="pb-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Image src={`${ImagePath}/logo/logo-1.png`} alt="" width={114} height={38} unoptimized/>
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;
