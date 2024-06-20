import React from 'react'

function SubNavBar() {
  return (
  <div className="top">
<div className="container">
    <div className='row'>
      <div className="col-md-8 d-flex align-items-center">
        <div className="text-left">
          <span><i className="fas fa-location-dot"></i> Brooklyn, NY 10036, United States </span>
        </div>
        <div className="text-left">
          <span><i className="fa fa-phone"></i> 1-800-123-1234; 1-800-123-5678</span>
        </div>
        <div className="text-left">
          <span><i className="fa fa-envelope"></i> example.com</span>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-left">
          <span>Don't walk through life just playing football.</span>
        </div>
      </div>
      </div>
    </div>
  </div>

  

  
  )
}

export default SubNavBar