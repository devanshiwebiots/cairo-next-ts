import SVG from "@/CommonComponent/SVG";
import { CheckAll, ImagePath, Message } from "@/Constant";
import { MessageData } from "@/Data/Layout";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";

export const MessageHeader = () => {
    return (
        <li className="onhover-dropdown">
            <div className="message">
                <SVG iconId="Message"/>
            </div>
            <div className="onhover-show-div message-dropdown">
                <h6 className="f-18 mb-0 dropdown-title">{Message}</h6>
                <ul>
                    {MessageData?.map((item, index) => (
                        <li key={index}>
                            <div className="d-flex align-items-start">
                                <Image src={`${ImagePath}/user/${item.image}`} className='message-img' alt="image" width={40} height={40} unoptimized/>
                                <div className="flex-grow-1">
                                    <h5 className="mb-1"><Link href={`/chat/private_chat`}>{item.title}</Link></h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className="notification-right"><X /></div>
                            </div>
                        </li>
                    ))}
                     <li><Link className="btn btn-primary w-100" href={`/chat/private_chat`}>{CheckAll}</Link></li>
                </ul>
            </div>
        </li>
    )
}