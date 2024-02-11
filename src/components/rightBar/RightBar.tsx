import MaleAvatar from "../../assets/male_avatar.svg";
export const RightBar = () => {
  return (
    <div className="rightBar flex-2">
      <div className={'container p-5'}>
        <div className="item p-4 mb-4 border border-solid border-gray-700">
          <span className="text-gray-500">Suggestions</span>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white">Ediz Genc</span>
            </div>
            <div className="buttons flex items-center">
              <button className="inline-block px-2 py-2 mr-2 hover:bg-gray-800 bg-green-500 text-white border border-none rounded-md text-base text-center no-underline cursor-pointer">
                Follow
              </button>
              <button className="inline-block px-2 py-2 mr-2 hover:bg-gray-800 bg-red-500 text-white border border-none rounded-md text-base text-center no-underline cursor-pointer">
                Dismiss
              </button>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white">Ediz Genc</span>
            </div>
            <div className="buttons flex items-center">
              <button className="inline-block px-2 py-2 mr-2 hover:bg-gray-800 bg-green-500 text-white border border-none rounded-md text-base text-center no-underline cursor-pointer">
                Follow
              </button>
              <button className="inline-block px-2 py-2 mr-2 hover:bg-gray-800 bg-red-500 text-white border border-none rounded-md text-base text-center no-underline cursor-pointer">
                Dismiss
              </button>
            </div>
          </div>
        </div>
        <div className="item p-4 mb-4 border border-solid border-gray-700">
          <span className="text-gray-500">Latest Activities</span>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white mr-2">Ediz Genc</span>
              <p className="text-gray-500 text-sm mr-2">Liked your post</p>
            </div>
            <span className="text-gray-500 text-sm">2 min. ago</span>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white mr-2">M. Schumacher</span>
              <p className="text-gray-500 text-sm mr-2">posted a new photo</p>
            </div>
            <span className="text-gray-500 text-sm">10 min. ago</span>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white mr-2">S. O'Neill</span>
              <p className="text-gray-500 text-sm mr-2">posted new status</p>
            </div>
            <span className="text-gray-500 text-sm">1 hour ago</span>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <span className="font-semibold text-white mr-2">M. Jordan</span>
              <p className="text-gray-500 text-sm mr-2"> Changed his profile picture</p>
            </div>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </div>
        </div>
        <div className="item p-4 mb-4 border border-solid border-gray-700">
          <span className="text-gray-500">Online Friends</span>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">Ediz Genc</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">M. Schumacher</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">S. O'Neill</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">M. Plank</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">G. Galilei</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">M. Sebastian</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">M. Jordan</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">L. Hamilton</span>
            </div>
          </div>
          <div className="user flex items-center justify-between m-1 relative">
            <div className="userInfo flex items-center mr-20">
              <img className="w-10 h-10 rounded-full object-cover" src={MaleAvatar} alt="" />
              <div className="status w-2 h-2 bg-green-500 rounded-full absolute top-2 left-30" />
              <span className="font-semibold text-white">C. Sagan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
