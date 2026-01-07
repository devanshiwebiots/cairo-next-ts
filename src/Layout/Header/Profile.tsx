import { ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";

export const Profile = () => {
  const { data: session } = useSession();

  const logOutUser = () => {
    signOut();
  };

  return (
    <li className='profile-nav onhover-dropdown px-0 py-0'>
      <div className='d-flex profile-media align-items-center'>
        <Image className='img-40' src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt='' width={40} height={40} unoptimized/>
        <div className='flex-grow-1'>
          <span>{session?.user?.email}</span>
          <p className='mb-0 font-outfit'>{session?.user?.name || "Web Designer"}</p>
        </div>
      </div>
      <ul className='profile-dropdown onhover-show-div'>
        {UserProfileData?.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.link}`}>
              {item.icon} <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <li onClick={logOutUser} style={{ cursor: "pointer" }}>
          <LogOut />
          <span>{Logout}</span>
        </li>
      </ul>
    </li>
  );
};
