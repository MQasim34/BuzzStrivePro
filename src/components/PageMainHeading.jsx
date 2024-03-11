import React from 'react'

import {motion} from 'framer-motion'
const PageMainHeading = ({ text }) => {
    return (
        <div className='main_heading'>
            <motion.h1
            initial={{y:-10}}
            animate={{y:0}}
            exit={{y:-10}}
            transition={{duration: .3,}}
            >
                {text}
            </motion.h1>
        </div>
    )
}

export default PageMainHeading