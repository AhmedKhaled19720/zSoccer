import React from 'react'

function CotntactDetails() {
  return (
    <div>
        <section id="container">
	<div class="zerogrid">
		<div class="wrap-container clearfix">
			<div id="main-content">
				<div class="wrap-box">
                    {/* <!--Start Box--> */}
					<div class="row">
						<div class="col-2-3">
							<div class="wrap-col">
								<div class="contact">
									<div class="contact-header">
										<h5>Contact Form</h5>
									</div>
									<div id="contact_form">
										<form name="form1" id="ff" method="post" action="contact.php">
											<label class="row">
												<div class="col-1-2">
													<div class="wrap-col">
														<input type="text" name="name" id="name" placeholder="Enter name" required="required" />
													</div>
												</div>
												<div class="col-1-2">
													<div class="wrap-col">
														<input type="email" name="email" id="email" placeholder="Enter email" required="required" />
													</div>
												</div>
											</label>
											
											<label class="row">
												<div class="wrap-col">
													<textarea name="message" id="message" class="form-control" rows="4" cols="25" required="required"
													placeholder="Message"></textarea>
												</div>
											</label>
											<center><input class="sendButton" type="submit" name="submitcontact" value="Submit"/></center>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="contact-header">
									<h5>Contact Info</h5>
								</div>
								<div 
                                
                                style={{ background: '#fff', padding: '20px', boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.3)' }}
                                >
									<span>SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE.</span>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi. Nemo enim ipsam voluptatem quia.</p>
									<p>JL.Kemacetan timur no.23. block.Q3<br/>
										Jakarta-Indonesia</p>
									   <p>+6221 888 888 90 <br/>
										+6221 888 88891</p>
									<p>info@yourdomain.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default CotntactDetails