import React from "react";

function slider() {
  return (
    <div class="bg-white">

    <div class="zerogrid">
      		<div class="callbacks_container">

      <div
        id="carouselMaterialStyle"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
        data-mdb-carousel-init
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner rounded-5 shadow-4-strong">
          <div class="carousel-item active">
            <img
              src="images/slideshow-image1.jpg"
              class="d-block w-100"
              alt="Sunset Over the City"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to MyTeam</h1>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="images/slideshow-image2.jpg"
              class="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to MyTeam</h1> <span>Lorem ipsum dolor sit amet</span>{" "}
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="images/slideshow-image3.jpg"
              class="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to MyTeam</h1> <span>Lorem ipsum dolor sit amet</span>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div class="zerogrid">
		<div class="callbacks_container">
			<ul class="rslides" id="slider">
				<li>
					<img src="images/slideshow-image1.jpg" alt=""/>
					<div class="caption">
						<h1>Welcome to MyTeam</h1>
						<span >Lorem ipsum dolor sit amet</span>
					</div>
				</li>
				<li>
					<img src="images/slideshow-image2.jpg" alt=""/>
					<div class="caption">
						<h1>Welcome to MyTeam</h1>
						<span >Lorem ipsum dolor sit amet</span>
					</div>
				</li>
				<li>
					<img src="images/slideshow-image3.jpg" alt=""/>
					<div class="caption">
						<h1>Welcome to MyTeam</h1>
						<span >Lorem ipsum dolor sit amet</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div> */}
    </div>
    </div>
    </div>
  );
}

export default slider;
