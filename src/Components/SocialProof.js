import React from 'react';
import image1 from '../assets/fictionallogo1.png';
import image2 from '../assets/fictionallogo2.png';
import image3 from '../assets/fictionallogo3.png';
import image4 from '../assets/fictionallogo4.png';
import image5 from '../assets/fictionallogo5.png';
import image6 from '../assets/fictionallogo6.png';

function SocialProof() {
  return (
    <>
      <div className='container-fluid text-center p-lg-5 p-2 mt-3 bg-white rounded-3 rounded-top-0 border-top'>
        <div className='row p-3'>
          <p className='mt-2 contentPara'>Join 4,000+ companies already growing</p>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image1} alt="fictional logo" className='img-fluid' /></span>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image2} alt="fictional logo" className='img-fluid' /></span>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image3} alt="fictional logo" className='img-fluid' /></span>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image4} alt="fictional logo" className='img-fluid' /></span>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image5} alt="fictional logo" className='img-fluid' /></span>
          <span className='col-lg-2 col-md-4 col-sm-6 col-6'><img src={image6} alt="fictional logo" className='img-fluid' /></span>
        </div>
        <hr className='mb-5 text-purple mx-auto' style={{ width: '90%' }} />
      </div>
    </>
  )
}

export default SocialProof