import './profile.scss'
// import { Stories } from '../../../components/stories/Stories'
// import { Posts } from '../../../components/posts/Posts'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Posts } from '../../../components/posts/Posts'

export const Profile = () => {


  return (
    <div className="Profile">
      {/*<Stories />*/}
      {/*<Posts />*/}
      <div className="images">
        <img src="../src/assets/male_avatar.svg" className="profilePicture" alt="" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>M.Jordan</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Los Angeles, CA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>www.michaeljordan.com</span>
              </div>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  )
}
