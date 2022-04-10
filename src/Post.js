import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar  } from 'antd'
import { VerifiedOutlined, HeartOutlined, MessageOutlined, VerticalAlignTopOutlined, RedoOutlined} from '@ant-design/icons';

const Post = forwardRef(({
dispalayName,
username,
verified,
text,
image,
avatar
}, ref) =>{

  return (
    <div className='post' ref={ref}>
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
  );
});

export default Post