import React from 'react'
import './SideNav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TelegramIcon from '@mui/icons-material/Telegram';import ExploreIcon from '@mui/icons-material/Explore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';



function SideNav() {
  return (
    <div className='sidenav'>
      <img className="sidenav_logo" src="https://www.bypeterandpauls.com/images/instagram-img.png"/>

    <div className='sidenav_buttons'>
    <button className='side_button'>
    {/* icons */}
    <HomeIcon/>
<samp>Home</samp>
    </button>

    <button className='side_button'>
    <SearchIcon/>
<samp>search</samp>
    </button>

    <button className='side_button'>
    <ExploreIcon/>
<samp>explore</samp>
    </button>

    <button className='side_button'>
    <NotificationsIcon/>
<samp>notification</samp>
    </button>

    <button className='side_button'>
    <TelegramIcon/>
<samp>send</samp>
    </button>

    <button className='side_button'>
    <AddCircleOutlineIcon/>
<samp>create</samp>
    </button>
    </div>
      
      <div className='sidenav_menu'>
        <button className='sidenav_menu_button'>
        <MenuIcon/>  
         </button>
      </div>

    </div>
  )
}

export default SideNav
