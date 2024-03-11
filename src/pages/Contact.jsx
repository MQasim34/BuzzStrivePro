import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
import {motion} from 'framer-motion'
import { Button } from '@mui/material'
const Contact = () => {
  return (
    <motion.div className='container aboutsec'
    initial={{opacity: 0, }}
    animate={{opacity: 1 }}
    exit={{opacity: 0}}
    transition={{duration: .4}}
    >
      <PageMainHeading text='contact' />
      <div className='inner_section innerContact'>
        <p className='subheading'>I'm Always Open To Discussing Projects</p>
        <h3>in Web and webApp development</h3>

        <form action="">
        <div className="row">
            <div className='col-md-6 col-sm-12 d-flex flex-grow-1 flex-column innergap'>
              <label htmlFor="fname">first name</label>
              <input type="text" required id='fname' />
            </div>
            <div className='col-md-6 col-sm-12 d-flex flex-grow-1 flex-column innergap'>
              <label htmlFor="lname">last name</label>
              <input type="text" required id='lname'/>
            </div>

          <div className='d-flex col-12 flex-column email innergap'>
            <label htmlFor="email">Email Address</label>
            <input type="emil" />
          </div>
          <div className='d-flex col-12 flex-column email innergap'>
            <label htmlFor="email">Message</label>
            <textarea rows={4} />
          </div>
          <div className='d-flex col-12 flex-column email innergap'>
           <Button className='toogletheme' type='submit'>Submit</Button>
          </div>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact