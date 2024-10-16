import React, { useState } from 'react';
import '../styles/style.css';
import Image1 from '../assets/HeroSectionImage.png';
import { FaArrowRight } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import SocialProof from './SocialProof';

function HeroSection() {
  const [activeTab, setActiveTab] = useState('feature');

  return (
    <>
      <div className='container-fluid ps-lg-5 pe-lg-5 d-flex flex-column align-items-center justify-content-center mt-5 mb-lg-5 bg-white'>
        <div className='d-inline-flex mt-3 rounded-5 heroSection'>
          <button
            className={`btn btn-sm btnTab rounded-5 text-purple fw-bold btnText me-2 ${activeTab === 'feature' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('feature')}
          >
            New feature
          </button>
          <button
            className={`btn btn-sm btnTab rounded-5 text-purple fw-bold btnText d-flex align-items-center justify-content-center gap-1 ${activeTab === 'dashboard' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Check out the team dashboard <FaArrowRight />
          </button>
        </div>
        
        <div className='container-fluid text-center mt-4'>
          <p className='contentHeading'>Beautiful analytics to grow smarter</p>
          <p className='contentPara' style={{textWrap:'balance'}}>Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        
        <div className="d-flex mx-auto justify-content-center flex-column-reverse flex-lg-row w-100 gap-2 col-6 mt-4">
          <button className="btn btn-lg d-flex align-items-center justify-content-center gap-1 actionBtn1 border rounded-2" type="button">
            <FiPlayCircle />Demo
          </button>
          <button className="btn btn-lg actionBtn2 border rounded-2" type="button">Sign up</button>
        </div>
        
        <div className="position-relative d-flex flex-column mx-auto justify-content-center align-items-center w-100 mt-5">
          <img
            src={Image1}
            alt="hero-section-image"
            className="img-fluid w-100 mt-3 border border-5 border-dark rounded-3 shadow-lg"
          />
          <div className="w-100 social-proof-container">
            <SocialProof  />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
