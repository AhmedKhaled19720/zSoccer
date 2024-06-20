/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function NavBar() {
  return (
    <div>
<header>
  <div className="wrap-header zerogrid">
    <div className="row d-flex justify-content-between">
      <div className="col-md-4">
        <a href='index.html' className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </div>
      
      <div className="col-md-8">
        <div id="cssmenu">
          <ul>
            <li className='active'><a href="index.html">Home</a></li>
            <li><a href="archive.html">Blog</a></li>
            <li><a href="single.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</header>

      {/* <header>
	<div class="wrap-header zerogrid">
		<div class="row">
			<div id="cssmenu">
				   <li class="active"><a href="index.html">Home</a></li>
				   <li><a href="archive.html">Blog</a></li>
				   <li><a href="single.html">About</a></li>
				   <li><a href="contact.html">Contact</a></li>
				</ul>
			</div>
			<a href="index.html" class="logo"><img src="images/logo.png"/></a>
		</div>
	</div>
</header> */}

        
     
    </div>
  )
}

export default NavBar