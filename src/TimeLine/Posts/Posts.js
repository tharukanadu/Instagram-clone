import React from 'react'
import './Posts.css'
import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


function Posts({user,postImage,like,timespang}) {
  return (
    <div className='poster'> 
     <div className='poster_header'>
      <div className='post_headerAuther'>

      <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
      {user} <span>{timespang}</span>
      </div>
     <MoreHorizIcon/>


     </div>
     <div className='poster_image'>
      <img src={postImage}/>

     </div>
     <div className='post_footer'>
      <div className='post_footerIcon'>
        <div className='post_IconMain'>
          <FavoriteBorderIcon className="postIcon"/>
          <ChatBubbleOutlineIcon className='postIcon'/>
          <TelegramIcon className='postIcon'/>
        </div>
        <div className='post_iconSave'>
          <BookmarkBorderIcon className='postIcon'/>
        </div>
      </div>
      Liked by {like} people
     </div>
    </div>
  )
}

export default Posts
