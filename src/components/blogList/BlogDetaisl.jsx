// import React, { useState, useEffect } from 'react'
// import { getBlogcontent } from '../../utils/getBlogcontent.js'
// import { useParams } from 'react-router-dom';


// const BlogDetaisl = () => {

//   const { id } = useParams()
//   const [blogContentSingle, setblogContentSingle] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getBlogcontent();
//         const signlePost = data.find(Blogs => Blogs.id === parseInt(id));
//         setblogContentSingle(signlePost)
//       } 
//       catch (error) {
//         console.log("Error feching Blog content ...");
//       }
//     }

//     fetchData();
//   }, [id])


//   return (
//     <>
//       <div className='BlogDetails'>
//         {blogContentSingle && (
//           <div className='container'>
//             <div className="row">
//               <div className="col-md-10 sm-col-12 pl-0">
//                 <div className='hellocalss'>
//                   <span className='BDRName'> <b>{blogContentSingle.WriteName}</b> <i> Writes</i></span>
//                   <h1 className='BDtitle'>{blogContentSingle.title}</h1>
//                   <p className='BDPara'>{blogContentSingle.expert}</p>
//                 </div>
//               </div>
//               <div className="col-md-2 col-sm-12 pr-0 ">
//                 <div className='autherDetails sticky top-0'>
//                   <h1 className='BDtitle'>ABOUT THE AUTHOR</h1>
//                   <div>
//                     <img src={blogContentSingle.image} alt="" />
//                   </div>
//                   <div className='aboutauthor'>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default BlogDetaisl

import React from 'react'

const BlogDetaisl = () => {
  return (
    <div>BlogDetaisl</div>
  )
}

export default BlogDetaisl