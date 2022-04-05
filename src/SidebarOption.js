import React from 'react'
import "./SidebarOption.css";

function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
        <Icon className='icons'/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption