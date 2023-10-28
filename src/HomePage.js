import React from 'react'
import './HomePage.css'
import SideNav from './Navigestion/SideNav'
import TimeLine from './TimeLine/TimeLine'

function HomePage() {
  return (
    <div className='homePage'>
      <div className='homePage_nav'>
        <SideNav/>
        </div> 
        <div className='homePage_timeLine'>
        <TimeLine/>            
            
            </div> 
    </div>
  )
}

export default HomePage
