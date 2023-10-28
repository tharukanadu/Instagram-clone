import React, { useState } from 'react'
import './Timeline.css'
import Suggestion from './Suggestion'
import Poster from '../TimeLine/Posts/Posts'



function TimeLine() {

  const [posts,setPosts]=useState([
    {
    user:'Justin Bieber',
    postImage:'https://th.bing.com/th/id/OIP.lyHM230jb42u2x6upS-w0AHaFj?pid=ImgDet&rs=1',
    likes:60,
    timespang:"2h"
  },
  {
    user:'Zayn Malik',
    postImage:'https://th.bing.com/th/id/OIP.-q36wwa8HOdhRGjc4XzPVQHaIH?pid=ImgDet&rs=1',
    likes:200,
    timespang:"23h"
  },
  {
    user:'Yohani',
    postImage:'https://th.bing.com/th/id/OIP.jiJ2gBrrlM0UrGOCfvdd4wHaJC?pid=ImgDet&rs=1',
    likes:250,
    timespang:"2d"
  },

  {
    user:'Selena Gomez',
    postImage:'https://th.bing.com/th/id/OIP.76VElQkU1LTgTbTUkJRWJQHaLH?pid=ImgDet&rs=1',
    likes:360,
    timespang:"4d"
  },
  {
    user:'virat kohli',
    postImage:'https://th.bing.com/th/id/OIP.DTC_Q3gbdLg4iM4_jgoqLQHaE5?pid=ImgDet&rs=1',
    likes:400,
    timespang:"5d"
  },
  {
    user:'Miley Cyrus',
    postImage:'https://th.bing.com/th/id/OIP.Gfa2HYMC2REumZX6-LVq5wHaKn?pid=ImgDet&rs=1',
    likes:580,
    timespang:"7d"
  },

  ]);
  return (
    <div className='timeLine'>
      <div className='timeLine_left'>
        <div className='timeLine_posts'>

          {posts.map((post)=>(
            <Poster 
            user={post.user}
            postImage={post.postImage}
            like={post.likes}
            timespang={post.timespang}
            />
          ))}

        </div>
      </div>
      <div className='timeLine_right'>
        <Suggestion/>
      </div>
    </div>
  )
}

export default TimeLine
