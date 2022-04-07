import React from 'react'
import './Post.css'
import { Avatar  } from 'antd'
import { VerifiedOutlined, HeartOutlined, MessageOutlined, VerticalAlignTopOutlined, RedoOutlined} from '@ant-design/icons';

function Post({
dispalayName,
username,
verified,
text,
image,
avatar
}) {

  return (
    <div className='post'>
        <div className='post__avatar'>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        </div>

        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>refeh ali {''}
                        <span className='post__headerSpecial'>
                        <VerifiedOutlined className='post__badge'/> @Doshemon Ali
                        </span>
                    </h3>
                </div>
                <div className='post__headerDecription'>
                    <p>I challenge you to build a Twitter clone</p>
                </div>
            </div>
            <img src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif' alt=''></img>
            <div className='post__footer'>
            <MessageOutlined />
            <RedoOutlined />
            <HeartOutlined />
            <VerticalAlignTopOutlined />

            </div>
        
        </div>
        
    </div>
  )
}

export default Post