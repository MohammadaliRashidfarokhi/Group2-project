import './postAct.scss'
import { FavoriteBorderOutlined } from '@mui/icons-material/FavoriteBorderOutlined'
import { FavoriteOutlined } from '@mui/icons-material/FavoriteOutlined'
import { TextsmsOutlined } from '@mui/icons-material/TextsmsOutlined'
import { ShareOutlinedIcon } from '@mui/icons-material/ShareOutlined'
import { MoreHorizOutlined } from '@mui/icons-material/'
import { Link } from 'react-router-dom'

export const PostAct = ({post}) => {
  return (
    <div className='post'>
      <div className="user">
        <div className="userInfo">
          <img src={post.image} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`}></Link>
            <span>{post.name}</span>
          </div>
        </div>
        <MoreHorizOutlined />
      </div>
      <div className="content"></div>
      <div className="info"></div>
    </div>
  )
}
