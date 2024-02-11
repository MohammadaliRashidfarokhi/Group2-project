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
import { Link } from 'react-router-dom'

export const LeftBar = () => {
  return (
    <div className="leftBar flex-auto text-white">
      <div className="container p-8">
        <div className="menu flex flex-col gap-6">
          <Link to={'/profile'}>
            <div className="user flex items-center gap-2">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt={''} />
              <span className="hover:text-slate-400 font-semibold">Username</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Friends} alt={''} />
              <span className="hover:text-slate-400 font-light">Friends</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Groups} alt={''} />
              <span className="hover:text-slate-400 font-light">Groups</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Market} alt={''} />
              <span className="hover:text-slate-400 font-light">Market</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Watch} alt={''} />
              <span className="hover:text-slate-400 font-light">Watch</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Memories} alt={''} />
              <span className="hover:text-slate-400 font-light">Memories</span>
            </div>
          </Link>
        </div>
        <hr className="my-5 border-none h-px bg-gray-300" />
        <div className="menu flex flex-col gap-6">
          <span className="text-xl">Shortcuts</span>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Events} alt={''} />
              <span className="hover:text-slate-400 font-light">Events</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Gaming} alt={''} />
              <span className="hover:text-slate-400 font-light">Gaming</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Gallery} alt={''} />
              <span className="hover:text-slate-400 font-light">Gallery</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Videos} alt={''} />
              <span className="hover:text-slate-400 font-light">Videos</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Messages} alt={''} />
              <span className="hover:text-slate-400 font-light">Messages</span>
            </div>
          </Link>
        </div>
        <hr className="my-5 border-none h-px bg-gray-300" />
        <div className="menu flex flex-col gap-6">
          <span className="text-xl">Others</span>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Tutorials} alt={''} />
              <span className="hover:text-slate-400 font-light">Tutorials</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Courses} alt={''} />
              <span className="hover:text-slate-400 font-light">Courses</span>
            </div>
          </Link>
          <Link to={'/'}>
            <div className="item flex items-center gap-4">
              <img className="w-7 h-7 rounded-full object-cover" src={Funds} alt={''} />
              <span className="hover:text-slate-400 font-light">Funds</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
