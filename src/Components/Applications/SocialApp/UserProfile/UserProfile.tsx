import { ImagePath } from "@/Constant";
import { SocialAppCallBackType } from "@/Types/UserProfile";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";
import UserProfileIcons from "./UserProfileIcons";
import UserProfileNav from "./UserProfileNav";

const UserProfile :React.FC<SocialAppCallBackType> = ({ callback }) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image alt="user" src={`${ImagePath}/user/1.jpg`} width={100} height={100}/>
            </div>
            <div className="icon-wrapper">
             <i className="icofont icofont-pencil-alt-5" />
            </div>
            <UserProfileIcons />
          </div>
          <div className="info market-tabs p-0">
            <UserProfileNav callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
