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
        <Avatar src={avatar} />
        </div>

        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>{dispalayName}{''}
                        <span className='post__headerSpecial'>
                        {verified && <VerifiedOutlined className='post__badge'/>}
                         @{username}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDecription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt=''></img>
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