import React from "react";
import { Button } from "reactstrap";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const UserSocialApp = () => {
  const handlesubmit = () =>{
    toast.error("This is only demo purpose, click on the Sign In button to login.")
  }
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Button tag="a" color="light" onClick={handlesubmit}>
          <Linkedin className="txt-linkedin" /> {LinkedInIcon}
        </Button>
        <Button tag="a" color="light" onClick={handlesubmit}>
          <Twitter className="txt-twitter" />
          {TwitterIcon}
        </Button>
        <Button tag="a" color="light" onClick={handlesubmit}>
          <Facebook className="txt-fb" />
          {FacebookIcon}
        </Button>
      </div>
    </div>
  );
};

export default UserSocialApp;
