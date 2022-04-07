import React from 'react'
import './TweetBox.css'
import { Avatar } from 'antd'
import { Button } from 'antd';

function TweetBox() {
  return (      
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                <input placeholder='what is new?' type="text"></input>
            </div>
            <input className='tweetBox__imageInput' placeholder='Optiona: Enter image URL' type="text"></input>

            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox