import React, { useEffect, useState } from 'react';
import PageMainHeading from '../components/PageMainHeading';
import { motion } from 'framer-motion';
import { getBlogcontent } from '../utils/getBlogcontent';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Blog = () => {
  const [blogContent, setBlogContent] = useState([]);

 useEffect(() => {
   const DataFetch = async() => {
     const blogResponse =await getBlogcontent();
     console.log(blogResponse);
  DataFetch();
 } }, [])


  // for the substring
  const max_width = 250;

  return (
    <>
      <motion.div className='container aboutsec'
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, }}
        transition={{ duration: .4 }}
      >
        <PageMainHeading text='blog' />

        <div className='row postsMain mt-3' >
          {blogContent.map((dtls) => (
            <div className='col-12 blogInner' key={dtls.id}>
              <div className='d-flex'>
                <div className="mbloleft d-flex flex-column">
                  <Link to={`BlogDetails/${dtls.id}`}>
                    <img src={dtls.image} alt="" />
                  </Link>
                  <span className="postdate">{dtls.Posted_date}</span>
                </div>
                <div className="mblorihgt">
                  <h1 className="writeName">{dtls.WriteName} <i>writes</i></h1>
                  <Link className='title' to={`BlogDetails/${dtls.id}`}>{dtls.title}</Link>
                  <p className='postdetails'>
                    {dtls.expert.length > max_width ? dtls.expert.substring(0, max_width) + ' . . . . . . . . ' : ''}
                  </p>
                  <Link to={`BlogDetails/${dtls.id}`}>
                    <Button className='toogletheme'>
                      read more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </motion.div>
    </>
  );
}

export default Blog;
