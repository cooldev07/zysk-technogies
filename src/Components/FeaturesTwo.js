import React from 'react'
import Image from '../assets/FeaturedContent.png';
import Image1 from '../assets/featuredIcon1.png'
import Image2 from '../assets/featuredIcon2.png'
import Image3 from '../assets/featuredIcon3.png'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

function FeaturesTwo() {
  return (
    <>
      <div className='container-fluid ps-lg-5 pe-lg-5 text-center mt-lg-5 mb-lg-5'>
        <div>
          <span className='featureHeading rounded-5 p-1 fw-bold'>Features</span>
          <p className='fw-bold fs-2 mt-3' style={{ color: '#101828', textWrap: 'balance' }}>Cutting-edge features for advanced analytics</p>
          <p className='contentPara fs-6' style={{ textWrap: 'balance' }}>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='mt-3'>
          <img src={Image} alt="contentImage" className='img-fluid' />
          <div className='container-fluid '>
          <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 text-center p-2'>
            <div className='col mt-2'>
              <img src={Image1} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Share team inboxes</p>
              <p className='text-secondary' style={{textWrap:'balance'}}>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              <Link className='linktext'>Learn more <FaArrowRightLong /></Link>
            </div>
            <div className='col mt-2'>
              <img src={Image2} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Deliver instant answers</p>
              <p className='text-secondary' style={{textWrap:'balance'}}>An all-in-one customer service platform that helps you balance everything your customers need <br /> to be happy.</p>
              <Link className='linktext'>Learn more <FaArrowRightLong /></Link>
            </div>
            <div className='col mt-2'>
              <img src={Image3} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Manage your team with reports</p>
              <p className='text-secondary' style={{textWrap:'balance'}}>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
              <Link className='linktext'>Learn more <FaArrowRightLong /></Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr className='w-75 mx-auto text-purple' />
    </>
  )
}

export default FeaturesTwo