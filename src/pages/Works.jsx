import React from 'react'
import PageMainHeading from '../components/PageMainHeading'
import { motion } from 'framer-motion'
import { workDetail } from '../constant/works/works'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Works = () => {

  const wordksfun = workDetail.map((w, index) => (
    <div className="col-lg-6 col-sm-12 mb-4" key={index}>
      <div className='aboutCntnt'>
        <Link to={w.linkUrl} target='_blank'>
          <img src={w.imgUrl} alt={w.imgAlt} width='100%' />
        </Link>
        <div className='Workcontent px-3 pb-3'>
          <div className='d-flex justify-content-between align-items-center mt-2'>
          <Link to={w.linkUrl} className='worksLink' target='_blank'>{w.title}</Link>
            <span>{w.categories}</span>
          </div>
          <p>{w.details}</p>
          <Link to={w.linkUrl} target='_blank'>
            <Button className='toogletheme'>explore site </Button>
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <motion.div className='container aboutsec'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: .4 }}>

      <PageMainHeading text='works' />

      <div className='worksmain mt-5'>
        <div className="container-fliud">
          <div className="row">
            {wordksfun}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Works