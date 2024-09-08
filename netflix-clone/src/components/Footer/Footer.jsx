import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer_auter_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
        <ul>
        <li><FacebookIcon/></li>
        <li><InstagramIcon/></li>
        <li><YouTubeIcon/></li>
      </ul>
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Discript Icone</li>
              <li>Invester Relate Icone</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of User</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Centers</li>
              <li>Privecy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='sevice_code'>
          <p>Service Code</p>
        </div>
        <div className='copy_write'>
          &copy; 1997, 2024 Netflix, Inc.
        </div>
      </div>

    </div>
  )
}

export default Footer