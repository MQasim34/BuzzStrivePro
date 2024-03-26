import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
// import TransitionMotion from '../utils/TransitionMotion'
import { motion } from 'framer-motion'
import { FaGraduationCap } from "react-icons/fa6";
import resumeImg from '../assets/images/resumeImg1.jpg'
import resumeImg1 from '../assets/images/resumeImg2.jpg'

const Resume = () => {
  return (
    <motion.div className='container aboutsec'
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <PageMainHeading text='resume' />

      <div className='container-fluid  mt-3'>
        <div className='d-flex align-items-center resumeTitle '>
          <FaGraduationCap />
          <h1>Education</h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 col-12 contentresume">
            <div className='resumeInner'>
              <span>2019 - 2023</span>
              <h1>BS in Information Technology</h1>
              <span>from</span>
              <h3>Virtual University of Pakistan</h3>
            <span>Jhelum, punjab, Pakistan</span>
            </div>
            <div className='resumeSideImg'>
              <img src={resumeImg} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-12 contentresume mt-3">
            <div className='resumeInner'>
              <span>2017 - 2019</span>
              <h1>inter in Computer Science</h1>
              <span>from</span>
              <h3>Bukhari College</h3>
            <span>Dina, Jhelum, punjab, Pakistan</span>
            </div>
            <div className='resumeSideImg'>
              <img src={resumeImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
// export default TransitionMotion(Resume);