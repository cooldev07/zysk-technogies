import React from 'react';
import image1 from '../assets/Blog1.png';
import avatar1 from '../assets/BlogAvatar1.png';
import image2 from '../assets/Blog2.png';
import avatar2 from '../assets/BlogAvatar2.png';
import image3 from '../assets/Blog3.png';
import avatar3 from '../assets/BlogAvatar3.png';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Blog() {
  return (
    <>
      <div className='container-fluid ps-lg-5 pe-lg-5 mt-lg-5 mb-5'>
        <div className='d-flex flex-wrap justify-content-between'>
          <div>
            <p className='fw-bold fs-4' style={{ color: '#6941C6' }}>Our blog</p>
            <p className='fw-bold fs-4'>Lastest blog posts</p>
            <p className='text-secondary fs-6'>Tool and strategies modern teams need to help their companies grow.</p>
          </div>
          <div>
            <button className='btn rounded-2 fw-bold mt-3 w-100' style={{ backgroundColor: '#6941C6', color: 'white' }}>View all posts</button>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-3'>
            <img src={image1} alt="BlogImage" className='img-fluid w-100' />
            <p className='fw-bold mt-3' style={{ color: '#6941C6' }}>Design</p>
            <p className='fw-bold fs-4 d-flex justify-content-between align-items-center'>UX review presentations <MdOutlineArrowOutward /></p>
            <p className='text-secondary'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className='d-flex gap-2 justify-content-start align-items-center mt-4'>
              <img src={avatar1} alt="blog avatar" />
              <div>
                <p className='fw-bold p-0 m-0'>Olivia Rhye</p>
                <p className='text-secondary p-0 m-0'>20 Jan 2024</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-3'>
            <img src={image2} alt="BlogImage" className='img-fluid w-100' />
            <p className='fw-bold mt-3' style={{ color: '#6941C6' }}>Product</p>
            <p className='fw-bold fs-4 d-flex justify-content-between align-items-center'>Migrating to Linear 101 <MdOutlineArrowOutward /></p>
            <p className='text-secondary'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
            <div className='d-flex gap-2 justify-content-start align-items-center mt-4'>
              <img src={avatar2} alt="blog avatar" />
              <div>
                <p className='fw-bold p-0 m-0'>Phoenix Baker</p>
                <p className='text-secondary p-0 m-0'>19 Jan 2024</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-3'>
            <img src={image3} alt="BlogImage" className='img-fluid w-100' />
            <p className='fw-bold mt-3' style={{ color: '#6941C6' }}>Software Engineering</p>
            <p className='fw-bold fs-4 d-flex justify-content-between align-items-center'>Building your API stack <MdOutlineArrowOutward /></p>
            <p className='text-secondary'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <div className='d-flex gap-2 justify-content-start align-items-center mt-4'>
              <img src={avatar3} alt="blog avatar" />
              <div>
                <p className='fw-bold p-0 m-0'>Lana Steiner</p>
                <p className='text-secondary p-0 m-0'>18 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog