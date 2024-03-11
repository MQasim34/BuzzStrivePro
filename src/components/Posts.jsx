import React from 'react'
import images from '../assets/images/image1.png'
import { Button } from '@mui/material'

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <>
        {/* <ul>
            {posts.map( (post,index) => (
                <li key={index}>
                {post.title}
                </li>
            ))}
        </ul> */}
        <div className='container px-0'>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className='d-flex postCard postcoloumn'>
                        <div className='d-flex flex-column leftposts'>
                            <img src={images} alt="" />
                            <span className='dateclass'>8 March, 2024</span>
                            <h2 className='aurtherName'>Facundo</h2>
                        </div>
                        <div className='postdetails'>
                            <h1 className='title'>An Introduction To Full Stack Composability</h1>
                            <p className='detailsclass'>
                            A well-designed composable system should not only consider the technical aspects but also take into account the nature of the content it handles. To help us with that, we can use a Headless Content Management system such as Storyblok.
                            </p>
                            <Button className='toogletheme'>Read more...</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Posts