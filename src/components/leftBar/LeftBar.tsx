import "./leftBar.css";
import MaleAvatar from "../../assets/male_avatar.svg";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/group.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Funds from "../../assets/fundraiser.png";


export const LeftBar = () => {
  return (
    <div className={'leftBar'}>
      <div className={'container'}>
        <div className={'menu'}>
          <div className={'user'}>
            <img src={MaleAvatar} alt={''} />
            <span>Username</span>
          </div>
          <div className={'item'}>
            <img src={Friends} alt={''} />
            <span>Friends</span>
          </div>
          <div className={'item'}>
            <img src={Groups} alt={''} />
            <span>Groups</span>
          </div>
          <div className={'item'}>
            <img src={Market} alt={''} />
            <span>Market</span>
          </div>
          <div className={'item'}>
            <img src={Watch} alt={''} />
            <span>Watch</span>
          </div>
          <div className={'item'}>
            <img src={Memories} alt={''} />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className={'menu'}>
          <span>Shortcuts</span>
          <div className={'item'}>
            <img src={Events} alt={''} />
            <span>Events</span>
          </div>
          <div className={'item'}>
            <img src={Gaming} alt={''} />
            <span>Gaming</span>
          </div>
          <div className={'item'}>
            <img src={Gallery} alt={''} />
            <span>Gallery</span>
          </div>
          <div className={'item'}>
            <img src={Videos} alt={''} />
            <span>Videos</span>
          </div>
          <div className={'item'}>
            <img src={Messages} alt={''} />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className={'menu'}>
          <span>Others</span>
          <div className={'item'}>
            <img src={Tutorials} alt={''} />
            <span>Tutorials</span>
          </div>
          <div className={'item'}>
            <img src={Courses} alt={''} />
            <span>Courses</span>
          </div>
          <div className={'item'}>
            <img src={Funds} alt={''} />
            <span>Funds</span>
          </div>
          <div className={'item'}>
            <img src={Funds} alt={''} />
            <span>Funds</span>
          </div>
          <div className={'item'}>
            <img src={Funds} alt={''} />
            <span>Funds</span>
          </div>
          <div className={'item'}>
            <img src={Funds} alt={''} />
            <span>Funds</span>
          </div>
        </div>
      </div>
    </div>
  )
}
