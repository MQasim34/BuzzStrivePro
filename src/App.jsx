
import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import './App.css'
import NavHeader from './components/NavHeader';
import About from "./pages/About";
import SideBar from "./components/SideBar";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Button } from "@mui/material";
import { AnimatePresence } from 'framer-motion';
import BlogDetaisl from "./components/blogList/BlogDetaisl";
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";

function App() {
  const location = useLocation();

  return (
    <>
      {/* <BrowserRouter> */}
      <div className='bodyWrapper'>
        <div>
          <NavHeader />
        </div>
        <div className='container-xl container-lg mb-4'>
          <div className="row bodyinner">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 "
            >
              <section className="mianPagesSec h-100">
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="BuzzStrivePro/" element={<About />} />
                    <Route path="BuzzStrivePro/Resume" element={<Resume />} />
                    <Route path="BuzzStrivePro/Works" element={<Works />} />
                    <Route path="BuzzStrivePro/Blogs" element={<Blog />} />
                    <Route path="BuzzStrivePro/Contact" element={<Contact />} />
                    <Route path="BuzzStrivePro/Blogs/BlogDetails/:id" element={<BlogDetaisl />} />
                  </Routes>
                </AnimatePresence>
              </section>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12"
            >
              <aside className="mainSideBar">
                <SideBar />
              </aside>
            </div>
          </div>
        </div>
        <footer className="footer container">
          <span>
            &copy; 2024 All Rights Reserved. Developed and Design by
            <Button className="strong"><a href="" target="_blank">BuzzStrivePro</a></Button>
          </span>
          <span className="d-flex align-items-center footerIcon">
            <Link to="https://www.fiverr.com/mqasim888" target="_blank">
              <Button className="toogletheme fiverr"><TbBrandFiverr /></Button>
            </Link>
            <Link to="https://github.com/MQasim34" target="_blank">
              <Button className="toogletheme github"><FaGithub /></Button>
            </Link>
            <Link to="https://app.netlify.com/teams/html-experts/overview" target="_blank">
              <Button className="toogletheme netlify"><SiNetlify /></Button>
            </Link>
          </span>
        </footer>
      </div>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App