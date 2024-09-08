import React from 'react'
import "./header.css"
import netflixlogo from "../../assets/images/Netflix-Logo.png.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='Header_outer_container'>
    <div className='header_container'>
        <div className='header_left'>
            <ul>
                <li><img src={ netflixlogo } alt="Netflix logo" width="100" /></li>
            
                <li>Home</li>
                <li>Tv showes</li>
                <li>Movies</li>
                <li>Latests</li>
                <li>Mylist</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className='header_right'>
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
            </ul>

        </div>
    </div>
    </div>
  )
}

export default Header