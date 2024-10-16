import React from 'react'
import Image1 from '../assets/featuredIcon1.png'
import Image2 from '../assets/featuredIcon2.png'
import Image3 from '../assets/featuredIcon3.png'
import Image4 from '../assets/featuredIcon4.png'
import Image5 from '../assets/featuredIcon5.png'
import Image6 from '../assets/featuredIcon6.png'

function FeaturesOne() {
  return (
    <>
      <div className='container-fluid ps-lg-5 pe-lg-5 text-center mt-lg-5 mb-lg-5'>
        <div>
          <p className='fw-bold' style={{ color: '#6941C6' }}>Features</p>
          <p className='fw-bold' style={{ color: '#101828', fontSize: '1.5rem' }}>Analytics that feels like it’s from the future</p>
          <p className='contentPara fs-6'>Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='container-fluid mt-5'>
          <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 text-center'>
            <div className='col'>
              <img src={Image1} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Share team inboxes</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='col'>
              <img src={Image2} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Deliver instant answers</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
            <div className='col'>
              <img src={Image3} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Manage your team with reports</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
            <div className='col'>
              <img src={Image4} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Connect with customers</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
            </div>
            <div className='col'>
              <img src={Image5} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Connect the tools you already use</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>
            <div className='col'>
              <img src={Image6} alt="featured icon" className='img-fluid' />
              <p className='fw-bold'>Our people make the difference</p>
              <p className='text-secondary' style={{textWrap: 'balance'}}>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturesOne