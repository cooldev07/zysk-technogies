import React from 'react'
import image1 from '../assets/Fictional company logo.png'
import image2 from '../assets/Fictional Company Avatar.png'

function Testimonial() {
  return (
    <>
      <div className='container-fluid text-center mt-3 bg-light p-5'>
        <span><img src={image1} alt="testimonial logo" /></span>
        <p className='fw-bold fs-2 mt-4' style={{ color: '#101828', textWrap: 'balance' }}>We’ve been using Untitled to kick start every new <br /> project and can’t imagine working without it.</p>
        <div className='mt-3 p-3'>
          <img src={image2} alt="testimonial avatar" className='img-fluid' />
          <p className='fs-4 fw-bold m-0 p-0'>Candice Wu</p>
          <p className='fs-6 fw-bold text-secondary m-0 p-0'>Product Manager, Sisyphus</p>
        </div>
      </div>
    </>
  )
}

export default Testimonial