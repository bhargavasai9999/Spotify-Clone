import React from 'react';
import './Sidebar.css';
import logo from './profile.png'
import { Sidebarbutton } from './Sidebarbutton';
import {RiHome2Fill} from 'react-icons/ri'
import {HiTrendingUp} from 'react-icons/hi'
import {TbPlayerPlayFilled} from 'react-icons/tb';
import {LuLibrary} from 'react-icons/lu';
import {MdFavorite} from 'react-icons/md'
import {FaSignOutAlt} from 'react-icons/fa'

export function Sidebar() {
  return (
    <div className="bar-container ">
    <div className='profile-img'>
    <img src={logo} alt="profile-image" className='profile-image'/>
    </div>
    <div >
      <Sidebarbutton title="Home" to="/" icon={<RiHome2Fill/>} />
      <Sidebarbutton title="Trending" to="/trending " icon={<HiTrendingUp/>} />
      <Sidebarbutton title="Player" to="/player " icon={<TbPlayerPlayFilled/>} />
      <Sidebarbutton title="Favorites" to="/favourites " icon={<MdFavorite/>} />
      <Sidebarbutton title="Library" to="/library " icon={<LuLibrary/>} />
    </div>
    <div className='sign-out'>
  <Sidebarbutton to="/signout" title="Sign Out" icon={<FaSignOutAlt/>} />
</div>
    </div>
  )
}
