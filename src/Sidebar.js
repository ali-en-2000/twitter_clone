import React from 'react'
import './Sidebar.css'
import {TwitterOutlined, HomeOutlined, SearchOutlined, BellOutlined, MailOutlined, TagOutlined, ProfileOutlined, UserOutlined, DashOutlined   } from '@ant-design/icons';
import { Button } from 'antd';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter cions */}
        <TwitterOutlined className='sidebar__twitterIcon'/>
        <SidebarOption active Icon={HomeOutlined} text="Home"/>
        <SidebarOption Icon={SearchOutlined} text="Explore"/>
        <SidebarOption Icon={BellOutlined} text="Notifications"/>
        <SidebarOption Icon={MailOutlined } text="messages"/>
        <SidebarOption Icon={TagOutlined} text="Bookmarks"/>
        <SidebarOption Icon={ProfileOutlined} text="Lists"/>
        <SidebarOption Icon={UserOutlined} text="Profile"/>
        <SidebarOption Icon={DashOutlined} text="More"/>

        {/* Botton Tweet */}
        <Button className='sidebar__tweet'  > Tweet</Button>
    </div>
  )
}

export default Sidebar