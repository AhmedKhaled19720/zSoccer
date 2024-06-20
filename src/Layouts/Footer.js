/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
	<div className="zerogrid top-footer">
		<div className="row">
			<div className="col-1-5">
				<a href="#"><img src="images/15.jpg" /></a>
			</div>
			<div className="col-1-5">
				<a href="#"><img src="images/16.jpg" /></a>
			</div>
			<div className="col-1-5">
				<a href="#"><img src="images/17.jpg" /></a>
			</div>
			<div className="col-1-5">
				<a href="#"><img src="images/18.jpg" /></a>
			</div>
			<div className="col-1-5">
				<a href="#"><img src="images/19.jpg" /></a>
			</div>
		</div>
	</div>
	<div className="zerogrid wrap-footer">
		<div className="row">
			<div className="col-1-4 col-footer-1">
				<div className="wrap-col">
					<h3>About Us</h3>
					<p>Ut volutpat consectetur aliquam. Curabitur auctor in nis ulum ornare. Sed consequat, augue condimentum fermentum gravida, metus elit vehicula dui.</p>
					<a href="index.html" className="logo"><img src="images/logo.png" /></a>
				</div>
			</div>
			<div className="col-1-4 col-footer-2">
				<div className="wrap-col">
					<h3>Categories</h3>
					<ul>
						<li><a href="#">Action</a></li>
						<li><a href="#">Romantic</a></li>
						<li><a href="#">Cartoon</a></li>
						<li><a href="#">Zombies</a></li>
					</ul>
				</div>
			</div>
			<div className="col-1-4 col-footer-3">
				<div className="wrap-col">
					<h3>Flickr Photos</h3>
					<div className="row">
						<div className="col-1-3">
							<div className="wrap-col">
								<a href="#"><img src="images/6.jpg" /></a>
								<a href="#"><img src="images/7.jpg" /></a>
								<a href="#"><img src="images/8.jpg" /></a>
							</div>
						</div>
						<div className="col-1-3">
							<div className="wrap-col">
								<a href="#"><img src="images/9.jpg" /></a>
								<a href="#"><img src="images/6.jpg" /></a>
								<a href="#"><img src="images/7.jpg" /></a>
							</div>
						</div>
						<div className="col-1-3">
							<div className="wrap-col">
								<a href="#"><img src="images/6.jpg" /></a>
								<a href="#"><img src="images/7.jpg" /></a>
								<a href="#"><img src="images/8.jpg" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-1-4 col-footer-4">
				<div className="wrap-col">
					<h3>Contact</h3>
					<span><i className="fa fa-envelope"></i> example@sports-club.com</span>
					<span><i className="fa fa-phone"></i> 1-800-123-1234; 1-800-123-5678</span>
					<span><i className="fa fa-map-marker"></i> Brooklyn, NY 10036, United States</span>
				</div>
			</div>
		</div>
	</div>
</footer>
    </div>
  )
}

export default Footer