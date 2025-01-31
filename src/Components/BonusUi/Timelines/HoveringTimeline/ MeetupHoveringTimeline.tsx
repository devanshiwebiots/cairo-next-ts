import { ImagePath, USMeeting } from "@/Constant";
import { MeetupHoveringList } from "@/Data/BonusUi/TimeLine";
import Image from "next/image";

export const MeetupHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">December 2023 - Meetup</p>
        <h4>{USMeeting}</h4>
        <div className="text-muted">
          2209 Leverton Cove RoadSpringfield, MA 01109
          <div className="designer-details">
            {MeetupHoveringList.map(({ image, name, number }, index) => (
              <div className="designer-profile" key={index}>
                <div className="designer-wrap">
                  <Image className="designer-img" src={`${ImagePath}/${image}`} alt="profile" width={50} height={50}/>
                  <div className="designer-content">
                    <h6>{name}</h6>
                    <p>{number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
