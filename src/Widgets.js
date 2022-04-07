import React from 'react'
import './Widgets.css'
import { SearchOutlined } from '@ant-design/icons'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed

} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchOutlined className='widgets__searchIcon'/>
        <input placeholder='Search Twitter' type='text'/>
      </div>
        
        <div className='widgets__widgetContainer'>
          <h2> What's happening</h2>
          <TwitterTweetEmbed tweetId={"1511755733439856647"}/>

          <TwitterTimelineEmbed
          sourceType='profile'
          screenName='cleverqazi'
          options={{height:400}}/>

          <TwitterShareButton
          url={'https://facebook.com/cleverprogrammer'}
          options={{text:'#reactjs is awesome', via:'Davshemon Ali'}}
          />

        </div>
    </div>
  )
}

export default Widgets