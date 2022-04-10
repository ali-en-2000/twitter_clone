import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar } from 'antd'
import { Button } from 'antd';
import db from './firebase'

function TweetBox() {
  const [tweetMesssage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet= e =>{
    e.preventDefault();

    db.collection('posts').add({
      dispalayName:'mamad',
      username:'mash mamaad',
      verified:true,
      text:tweetMesssage,
      image: tweetImage,
      avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'

    });

    setTweetMessage('');
    setTweetImage('');
  } 

  return (      
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                <input 
                onChange={(e)=>setTweetMessage(e.target.value)}
                value={tweetMesssage} 
                placeholder='what is new?' 
                type="text"/>

            </div>
            <input 
            value={tweetImage}
            onChange={(e)=>setTweetImage(e.target.value)}
            className='tweetBox__imageInput' 
            placeholder='Optiona: Enter image URL' 
            type="text"/>

            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox