/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Content() {
  return (
    <div>
      <section id="container" className="home-page">
        <div className="wrap-container clearfix">
          <div id="main-content">
            <section className="content-box box-1 box-style-1">
              <div className="wrap-box">
                <div className="zerogrid">
                  <div className="row">
                    <div className="col-1-3">
                      <div className="wrap-col">
                        <div className="sub-title">
                          <h2>FEATURED NEWS</h2>
                        </div>
                        <div className="item">
                          <img src="images/5.jpg" alt="Featured News Image" />
                          <div className="item-content">
                            <a href="single.html">
                              <h3>Texas Rangers Finish In Second Place</h3>
                            </a>
                            <div className="info">
                              Posted on June 22, 2010 in:{" "}
                              <a href="#">Featured</a>, <a href="#">News</a>
                            </div>
                            <p>
                              Black alloys, Sat Nav, Bluetooth, 4 seats, Ceramic
                              Brakes, Power boot, Soft closing doors, Alcantara
                              roof lining, Double glazing, Keyless entry,
                              Keyless start, Carbon fibre dash and door inserts,
                              IPod connection. Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat...
                            </p>
                            <a href="#">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1-3">
                      <div className="wrap-col">
                        <div className="sub-title">
                          <h2>UPCOMING EVENTS</h2>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="item-content">
                              <a href="single.html">
                                <h3>The Most Epic Match Of The Season</h3>
                              </a>
                              <div className="info">
                                Posted on June 22, 2010 in:{" "}
                                <a href="#">Featured</a>, <a href="#">News</a>
                              </div>
                              <p>
                                Don't walk through life just playing football.
                                Don't walk through life just being an athlete.
                                Athletics will fade. Character and integrity are
                                the...
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="item-content">
                              <a href="single.html">
                                <h3>Pre Season Camp Success</h3>
                              </a>
                              <div className="info">
                                Posted on June 22, 2010 in:{" "}
                                <a href="#">Featured</a>, <a href="#">News</a>
                              </div>
                              <p>
                                Don't walk through life just playing football.
                                Don't walk through life just being an athlete.
                                Athletics will fade. Character and integrity are
                                the...
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="item-content">
                              <a href="single.html">
                                <h3>Nominated Club Of The Year</h3>
                              </a>
                              <div className="info">
                                Posted on June 22, 2010 in:{" "}
                                <a href="#">Featured</a>, <a href="#">News</a>
                              </div>
                              <p>
                                Don't walk through life just playing football.
                                Don't walk through life just being an athlete.
                                Athletics will fade. Character and integrity are
                                the...
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1-3">
                      <div className="wrap-col">
                        <div className="sub-title">
                          <h2>UPCOMING GAME</h2>
                        </div>
                        <h2
                          style={{
                            fontSize: "35px",
                            lineHeight: 1.3,
                            marginBottom: "10px",
                          }}
                        >
                          AMERICAN EAGLES VS. THE WASHINGTON REDSKINS
                        </h2>
                        <img src="images/4.jpg" alt="Upcoming Game Image" />

                        <p>
                          Don't walk through life just playing football. Don't
                          walk through life just being an athlete. Athletics
                          will fade. Character and integrity are the ultimate
                          vision, the
                        </p>

                        <a href="#">view all events at this venue</a>
                        <br />
                        <a href="#" className="button bt1">
                          BUY TICKET
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
