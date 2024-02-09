import './postAct.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { MoreHorizOutlined } from '@mui/icons-material/'
import { Link } from 'react-router-dom'
import { Comments } from '@/components/comments/Comments.jsx'
import { useState } from 'react'

export const PostAct = ({post}) => {

  const [commmentOpen, setCommentOpen] = useState(false)
  //TEMP
  const liked = false

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min. ago</span>
            </div>
          </div>
          <MoreHorizOutlined />
        </div>
        <div className="content"></div>
        <p>{post.describe}</p>
        <img src={post.img} alt="" />
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12
          </div>
          <div className="item" onClick={() => setCommentOpen(!commmentOpen)}>
            <TextsmsOutlinedIcon />
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            12
          </div>
        </div>
        {commmentOpen && <Comments />}
      </div>
    </div>
  )
}
