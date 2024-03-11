import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='container aboutsec'
    initial={{opacity: 0, }}
    animate={{opacity: 1 }}
    exit={{opacity: 0}}
    transition={{duration: .4}}
    >
      <PageMainHeading text='services' />
    </motion.div>
  )
}

export default Services