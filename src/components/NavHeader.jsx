
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi"
import { primaryHeaders } from '../constant/siteContent';


// theme chaning function
const NavHeader = () => {
  const [theme, setistheme] = useState('darktheme')
  useEffect(() => {
    document.body.classList = theme
  }, [theme])

  const toggleTeme = () => {
    console.log("heelo toggle")
    if (theme === "lighttheme") {
      setistheme('darktheme')
    } else {
      setistheme('lighttheme')
    }
  }



  // resize screen 

  const [menuscreentoggle, setMenuscreentoggle] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setMenuscreentoggle(window.innerWidth)
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  const isMobile = menuscreentoggle >= 767;

  // dynamic menu title in head 
  const [pageTitle, setPageTitle] = useState('About');
  // for the active class in links and change the colors of links
  const [linksActive, setlinksActive] = useState('about');

  useEffect(() => {
    document.title = `PortFolio | ${pageTitle}`;
  }, [pageTitle]);


  const handleLinksclick = (page) => {
    setPageTitle(page);
    setlinksActive(page); //update the links
    setopenclaose(false)
  }

  // handleopenClose function
  const [openclaose, setopenclaose] = useState(false)
  const handleopenClose = () => {
    setopenclaose(!openclaose)
  }

  useEffect(() => {
    document.body.classList.toggle('OverFlowAcrive', openclaose);
  }, [openclaose])

  const liLinks = primaryHeaders.map((links) => (
    <li key={links.id} id={links.title}>
      <Link to={links.URL} onClick={() => handleLinksclick(links.title)} className={linksActive === links.title ? 'active' : ''}>
        {links.title}
      </Link>
    </li>
  ))

  return (
    <div className='container-xl container-lg'>
      <header className='headermian d-flex justify-content-between align-items-center'>
        <div>
          <div className="logo">
            <Link >
              {/* <img src='' alt='PortFolio' /> */}
              <h1 className='logotext'>
                BuzzStrivePro
              </h1>
            </Link>
          </div>
        </div>
        <nav className='d-flex justify-content-between align-items-center gap-4'>
          {isMobile ? (<ul className='d-flex justify-content-center align-item-center gap-3'>
            {liLinks}
          </ul>) : (null)}
          <Button className='toogletheme' onClick={() => toggleTeme()}> {theme === "lighttheme" ? (<BsFillMoonStarsFill />) : (<RiSunFill />)}</Button>
          {isMobile ? (
            null
          ) : (<><Button className='menuBars toogletheme' onClick={handleopenClose}><IoIosMenu /></Button></>)
          }
        </nav>
      </header>
      {isMobile ? null : (
        <>
          {/* {openclaose ? ( */}
            <div className= {`${openclaose ? 'moileNav active' : 'moileNav' }`}>
              <div className="container h-100">
                <div className='d-flex align-items-center justify-content-between'>
                  <div className="logo">
                    <Link >
                      <h1 className='logotext'>BuzzStrivePro</h1>
                    </Link>
                  </div>
                  <Button className='menuBars toogletheme' onClick={handleopenClose}>
                    <TfiClose />
                  </Button>
                </div>
                <div className='mobileNavBar h-100'>
                  <nav className='d-flex justify-content-between align-items-center gap-4'>
                    <ul className='d-flex flex-column justify-content-center align-item-center gap-3'>
                      {liLinks}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          {/* ) : false} */}
        </>
      )}

      {isMobile ? null : (
        <>
          {openclaose ? (
            <div className='OverFlowAcrive' onClick={handleopenClose}/>
          ) : null}
        </>
      )}
    </div>
  )
}

export default NavHeader