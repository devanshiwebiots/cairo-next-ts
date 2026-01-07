import { Href, ImagePath } from "@/Constant";
import { CommentsCardList } from "@/Data/Blog";
import Image from "next/image";
import Link from "next/link";

const CommentsCardBody = () => {
  return (
    <ul className="comment-section">
      {CommentsCardList.map(({ src, time, description, name, className }, index) => (
        <li className={`${className ? className : ""}`} key={index}>
          <div className="d-flex">
            <Image src={`${ImagePath}/avtar/${src}`} alt="" width={50} height={50} unoptimized/>
            <div className="flex-grow-1">
              <h6>{name}</h6>
              <span>
                {time}
                <Link href={Href} className="ms-1">
                  Reply
                </Link>
              </span>
              <p>{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentsCardBody;
