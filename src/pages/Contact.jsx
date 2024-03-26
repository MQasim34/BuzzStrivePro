import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {

  const [state, handleSubmit] = useForm("mzbnjbyk");
  if (state.succeeded) {
    return <div className='aftersub'>
      <p>Thanks for Submission</p>
    </div>
  }

  return (
    <motion.div className='container aboutsec'
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <PageMainHeading text='contact' />
      <div className='inner_section innerContact'>
        <p className='subheading'>I'm Always Open To Discussing Projects</p>
        <h3>in Web and webApp development</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className='col-md-6 col-sm-12 d-flex flex-grow-1 flex-column innergap'>
              <label htmlFor="fname">first name</label>
              <input type="text" required id='fname' name='fname' />
              <ValidationError
                prefix="fname"
                field="fname"
                errors={state.errors}
              />
            </div>
            <div className='col-md-6 col-sm-12 d-flex flex-grow-1 flex-column innergap'>
              <label htmlFor="lname">last name</label>
              <input type="text" required id='lname' name='lname' />
              <ValidationError
                prefix="lname"
                field="lname"
                errors={state.errors}
              />
            </div>

            <div className='d-flex col-12 flex-column email innergap'>
              <label htmlFor="email">Email Address</label>
              <input id="email"
                type="email"
                name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className='d-flex col-12 flex-column email innergap'>
              <label htmlFor="message">Message</label>
              <textarea rows={4} id="message"
                name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className='d-flex col-12 flex-column email innergap'>
              <Button className='toogletheme' type="submit" disabled={state.submitting}>Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact