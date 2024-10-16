import React from 'react';
import Accordion from './Accordion';
import Image1 from '../assets/Avatar group.png'

function Faq() {
  return (
    <>
      <div className='container-fluid mt-lg-5 mb-lg-5'>
        <p className='fs-2 fw-bold text-center'>Frequently asked questions</p>
        <p className='fs-4 text-secondary text-center'>Everything you need to know about the product and billing.</p>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-5">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid text-center mt-3 bg-light p-5'>
        <img src={Image1} alt="testimonial avatar" className='img-fluid' />
        <p className='fs-4 fw-bold m-0 p-0 mt-2'>Still have questions?</p>
        <p className='fs-6 fw-bold text-secondary m-0 p-0 mt-2'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className='btn rounded-2 fw-bold mt-3' style={{ backgroundColor: '#6941C6', color: 'white' }}>Get in touch</button>
      </div>
    </>
  )
}

export default Faq