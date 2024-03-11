import React, { useEffect, useState } from 'react'
import { CiMobile3 } from "react-icons/ci";
import { IoIosMailUnread } from "react-icons/io";
import { IoLocation, IoCalendarClearOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LiaFacebookF, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from '@mui/material';
import ResumeBtn from './ResumeBtn';
import resumeImg from '../assets/images/sidebarImg.jpg';
// import ReactCSSTransitionGroup from 'react-transition-group';


const SideBar = () => {


  // const handleSidebarres = () => {
  //   console.log("hello side bar");
  // }

  const [sidebartoggle, setSidebartoggle] = useState(window.innerWidth)

  const mobosideBar = sidebartoggle <= 767;

  useEffect(() => {
    const resizeSidebar = () => {
      setSidebartoggle(window.innerWidth)
    }

    window.addEventListener('resize', resizeSidebar)

    return () => {
      window.removeEventListener('resize', resizeSidebar)
    }
  }, [])

  // sideBarclick
  const [isOpen, setisOpen] = useState(true)
  const sideBarclick = () => {
    if(isOpen === false){
      setSidebartoggle(true)
      setisOpen(true)
    }else(
      setSidebartoggle(false),
      setisOpen(false)
    )
  }


  //transition
  // var ReactCSSTransitionGroup = require('react-transition-group');



  return (
    <div className='sideBarOuter'>
      <div className="sidebarImage d-flex flex-column">
        <div className='formobile'>
          <div className='sbimg'>
            <img src={resumeImg} alt="Person Image" />
          </div>
          <div className='nameclassses'>
            <h1>BuzzStrivePro</h1>
            <h3>Web Developer</h3>
          </div>
        </div>
        <div className='mobilebtn'>
          <Button onClick={sideBarclick} style={{transition: 'all 1s ease-in-out'}}>Contact me</Button>
        </div>
      </div>
      {/* <ReactCSSTransitionGroup> */}
      {mobosideBar && isOpen ?
        (false) : (
        <div>
          <div className="sb-Contacts d-flex flex-column" style={{transition: 'all 1s ease-in-out'}}>
            <div className='sbContainer d-flex justify-content-start gap-3'>
              <div className='contactIcon'>
                <CiMobile3 />
              </div>
              <div className='contact_content d-flex flex-column'>
                <h4>Phone</h4>
                <h1>+92 318 5531368</h1>
              </div>
            </div>
            <div className='sbContainer d-flex justify-content-start gap-3'>
              <div className='contactIcon'>
                <IoIosMailUnread />
              </div>
              <div className='contact_content d-flex flex-column'>
                <h4>Email</h4>
                <h1>qasimtech777</h1>
              </div>
            </div>

            <div className='sbContainer d-flex justify-content-start gap-3'>
              <div className='contactIcon'>
                <IoLocation />
              </div>
              <div className='contact_content d-flex flex-column'>
                <h4>Location</h4>
                <h1>Hong kong Plaza</h1>
              </div>
            </div>

            <div className='sbContainer d-flex justify-content-start gap-3'>
              <div className='contactIcon'>
                <IoCalendarClearOutline />
              </div>
              <div className='contact_content d-flex flex-column'>
                <h4>Birthday</h4>
                <h1>May 15, 2001</h1>
              </div>
            </div>

          </div>

          {/* sideBar social icns */}
          <div className="sb_icons_main mt-3">
            <ul className='d-flex align-items-center justify-content-center m-0 p-0 '>
              <li><Button className='facebook'><LiaFacebookF /></Button></li>
              <li><Button className='twitter'><RiTwitterXFill /></Button></li>
              <li><Button className='instagram'><LiaInstagram /></Button></li>
              <li><Button className='linkedin'><LiaLinkedinIn /></Button></li>

            </ul>
          </div>

          <div className='donld_CV'>
            <ResumeBtn />
          </div>
        </div>)}
        {/* </ReactCSSTransitionGroup> */}
    </div>
  )
}

export default SideBar