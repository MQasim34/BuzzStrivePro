import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
import { aboutCntnt } from '../constant/siteContent'
import SwiperSlider from '../components/SwiperSlider'
// import TransitionMotion from '../utils/TransitionMotion'
import {motion} from 'framer-motion'

const About = () => {

  const contentinport = aboutCntnt.map( (about, index) => (
    <motion.div className="col-lg-6 col-md-6 col-12" key={index}
    initial={{y:-10, opacity: 0}}
    animate={{y:0, opacity:1}}
    transition={{
      duration: .7, delay: index * .4
    }}
    >
    <div className='aboutCntnt d-flex'>
      <div>
        <img src={about.image} alt="" width={35} /></div>
      <div>
        <h1>{about.title}</h1>
        <p>{about.details}</p>
      </div>
    </div>
    </motion.div>
  ))
  return (
    <motion.div className='container aboutsec'
    initial={{opacity: 0,}}
    animate={{opacity: 1, }}
    exit={{opacity: 0, }}
    transition={{duration: .4, ease: 'easeInOut'}}
    >
      <div>
        <PageMainHeading text='about' 
        />
        <motion.p
        initial={{y:-10, opacity: 0}}
        animate={{y:0, opacity:1}}
        exit={{opacity: 0, }}
        transition={{duration: .4}}
        >I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. </motion.p>
        <motion.p
        initial={{y:-10, opacity: 0}}
        animate={{y:0, opacity:1}}
        exit={{opacity: 0, }}
        transition={{duration: .4}}
        >
          My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</motion.p>
      </div>

      <div className='inner_section'>
        <h3 className='sub_title'>What I Do!</h3>
        <div className='row mt-4 content'> 
          {contentinport}
        </div>
      </div>
      <div className='aboutSlider text-center'>
        <h3>Clients</h3>
        <SwiperSlider />
      </div>
    </motion.div>
  )
}

// export default TransitionMotion(About)
export default About;