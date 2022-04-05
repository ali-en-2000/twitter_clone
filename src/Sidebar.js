import React from 'react'
import {TwitterOutlined, HomeOutlined, SearchOutlined, BellOutlined, MailOutlined, TagOutlined, ProfileOutlined, UserOutlined, DashOutlined   } from '@ant-design/icons';
// import { HomeOutlined} from '@ant-design/icons'
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div>
        {/* Twitter cions */}
        <TwitterOutlined/>
        <SidebarOption Icon={HomeOutlined} text="Home"/>
        <SidebarOption Icon={SearchOutlined} text="Explore"/>
        <SidebarOption Icon={BellOutlined} text="Notifications"/>
        <SidebarOption Icon={MailOutlined } text="messages"/>
        <SidebarOption Icon={TagOutlined} text="Bookmarks"/>
        <SidebarOption Icon={ProfileOutlined} text="Lists"/>
        <SidebarOption Icon={UserOutlined} text="Profile"/>
        <SidebarOption Icon={DashOutlined} text="More"/>


        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        

        {/* Botton Tweet */}

    </div>
  )
}

export default Sidebar