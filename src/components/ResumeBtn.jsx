import { Button } from '@mui/material'
import React from 'react'
import { MdOutlineDownload } from "react-icons/md";

const ResumeBtn = () => {

    const handleDownload = () => {
        // Construct the download URL for the resume file
        const resumeUrl = '../assets/images/MyResume.pdf';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = resumeUrl;

        // Set the download attribute to specify the file name
        link.download = 'resume.pdf';

        // Simulate a click to trigger the download
        document.body.appendChild(link);
        link.click();

        // Remove the temporary anchor element
        document.body.removeChild(link);
    }
    return (
        <div className='mt-3'>
            <Button onClick={handleDownload} className='d-inline justify-content-between toogletheme' style={{ width: '100%', padding: '0 0 4px 0', fontSize: '14px', fontWeight: '700', borderRadius: '0' }}>
                <span style={{ fontSize: '25px'}}>
                    <MdOutlineDownload className='mr-1' />
                </span>
                <span>
                    Download Resume
                </span>
            </Button>
        </div>
    )
}

export default ResumeBtn