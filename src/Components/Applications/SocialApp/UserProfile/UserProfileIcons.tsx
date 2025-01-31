import { Href } from "@/Constant";

const UserProfileIcon = () => {
  return (
    <ul className="share-icons">
      <li>
        <a className="social-icon bg-primary" href={Href}>
          <i className="fa fa-smile-o"></i>
        </a>
      </li>
      <li>
        <a className="social-icon bg-secondary ms-1" href={Href}>
          <i className="fa fa-wechat"></i>
        </a>
      </li>
      <li>
        <a className="social-icon bg-warning ms-1" href={Href}>
          <i className="fa fa-share-alt"></i>
        </a>
      </li>
    </ul>
  );
};

export default UserProfileIcon;
