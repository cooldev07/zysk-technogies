import React from 'react'

function Cta() {
  return (
    <>
      <div className='container-fluid mt-lg-5 mb-5 text-center p-4'>
        <p className='fw-bold fs-2'>Start your free trial</p>
        <p className='text-secondary'>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="d-flex mx-auto justify-content-center flex-column-reverse flex-lg-row w-100 gap-2 col-6 mt-4">
          <button className="btn btn-lg d-flex align-items-center justify-content-center gap-1 actionBtn1 border rounded-2" type="button">
            Learn more
          </button>
          <button className="btn btn-lg actionBtn2 border rounded-2" type="button">Get started</button>
        </div>
      </div>
    </>
  )
}

export default Cta