import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
// import TransitionMotion from '../utils/TransitionMotion'
import {motion} from 'framer-motion'

const Resume = () => {
  return (
    <motion.div className='container aboutsec'
    initial={{opacity: 0, }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{duration: .4}}
    >
      <PageMainHeading text='resume' />
    </motion.div>
  )
}

export default Resume
// export default TransitionMotion(Resume);