import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { MoreHorizOutlined } from '@mui/icons-material/'
import { Link } from 'react-router-dom'
import { Comments } from '@/components/comments/Comments.tsx'
import { useState } from 'react'

export const PostAct = ({post}) => {

  const [commmentOpen, setCommentOpen] = useState(false)
  //TEMP
  const liked = false

  return (
    <div className="post border rounded-lg bg-black text-white border-solid border-1 border-gray-700">
      <div className="container p-5">
        <div className="user flex items-center justify-between">
          <div className="userInfo flex">
            <img className="w-10 h-10 rounded-full object-cover" src={post.profilePic} alt="User Avatar" />
            <div className="details ml-3">
              <Link to={`/follow`} className="flex flex-col gap-1" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="name font-semibold">{post.name}</span>
                <span className="name text-stone-500 text-sm mt-1">{post.desc}</span>
                <span className="date text-sm text-gray-500">1 min. ago</span>
              </Link>
            </div>
          </div>
          <MoreHorizOutlined />
        </div>
        <div className="content mt-5"></div>
        <p>{post.describe}</p>
        <img className="w-full max-h-96 object-cover mt-5" src={post.img} alt="Post Image" />
        <div className="info flex items-center gap-5 mt-3">
          <div className="item flex items-center cursor-pointer text-sm">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12
          </div>
          <div className="item flex items-center cursor-pointer text-sm" onClick={() => setCommentOpen(!commmentOpen)}>
            <TextsmsOutlinedIcon />
            12 comments
          </div>
          <div className="item flex items-center cursor-pointer text-sm">
            <ShareOutlinedIcon />
            12
          </div>
        </div>
        {commmentOpen && <Comments />}
      </div>
    </div>
  )
}
