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
                <br/>
                <input placeholder='what is new?' type="text"></input>
                {/* <input placeholder='Enter image URL' type="text"></input> */}
            </div>


            <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
        </form>
    </div>
  )
}

export default TweetBox