import "./rightBar.css";
import MaleAvatar from "../../assets/male_avatar.svg";
export const RightBar = () => {
  return (
    <div className={'rightBar'}>
      <div className={'container'}>
        <div className={'item'}>
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <span>Ediz Genc</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <span>Ediz Genc</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className={'item'}>
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <p>
                <span>Ediz Genc</span> Liked your post
              </p>
            </div>
            <span>2 minutes ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <p>
                <span>M. Schumacher</span> posted a new photo
              </p>
            </div>
            <span>10 minutes ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <p>
                <span>S. O'Neill</span> posted new status
              </p>
            </div>
            <span>1 hour ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <p>
                <span>M. Jordan</span> Changed his profile picture
              </p>
            </div>
            <span>5 hours ago</span>
          </div>
        </div>
        <div className={'item'}>
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>Ediz Genc</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>M. Schumacher</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>S. O'Neill</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>M. Plank</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>G. Galilei</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>M. Sebastian</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>M. Jordan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>L. Hamilton</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={MaleAvatar} alt="" />
              <div className="status" />
              <span>C. Sagan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
