import React from 'react'
import   './Suggestion.css'
import { Avatar } from '@material-ui/core'

function Suggestion() {
  return (
    <div className='suggestion'>
     <div className='suggestion_title'>Suggestion for you </div>
      <div className='suggestion_username'>
        <div className='suggestion_usernames'>
        <div className='username_left'>
       <span className='avatar'>
        <Avatar>A</Avatar>
       </span>
<div className='username_info'>
  <span className='username'>redian</span>
  <span className='relation'>new to instergram</span>
</div>
    </div>
        <button className='follow_button'>follow</button>
      </div>

      <div className='suggestion_usernames'>
        <div className='username_left'>
       <span className='avatar'>
        <Avatar>D</Avatar>
       </span>
<div className='username_info'>
  <span className='username'>redian</span>
  <span className='relation'>new to instergram</span>
</div>
    </div>
        <button className='follow_button'>follow</button>
      </div>

      <div className='suggestion_usernames'>
        <div className='username_left'>
       <span className='avatar'>
        <Avatar>R</Avatar>
       </span>
<div className='username_info'>
  <span className='username'>redian</span>
  <span className='relation'>new to instergram</span>
</div>
    </div>
        <button className='follow_button'>follow</button>
      </div>


      
      </div> 
    </div>
  )
}

export default Suggestion
