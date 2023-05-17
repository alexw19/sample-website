import Layout from '../components/Layout'


export default function Home() {
  return (
    <div>
      <section class="banner">
        <div class="container">
          <div class="row banner-content">
            <div class="col-lg-6 col-md-12 py-3 py-lg-2 d-flex-acenter">
              <div class="wow fadeInLeftBig infinite">
                <h1>The Fastest Way to Achieve Success</h1>
                <p>It is a long esatablished fact that a reader will be distracted by the way</p>
                <button class="btn primary-btn">Get in Touch <i class="fa fa-arrow-right"
                  aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="col-lg-6 col-md-12  py-3 py-lg-2">
              <div class="wow fadeInRightBig infinite">
                <img src="/img-1.png" alt="banner-img" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 py-3 py-lg-2">
              <div class="wow fadeInUp infinite">
                <div class="card">
                  <div class="pl-20 pt-20 pb-20">
                    <img src="/time.png" alt="card-img" class="card-img-top img-fluid"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Save Time</h5>
                    <p class="card-text">We provide advising and support for business and
                      technology needs, now and into the future.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 py-3 py-lg-2">
              <div class="wow fadeInUp infinite">
                <div class="card">
                  <div class="pl-20 pt-20 pb-20">
                    <img src="/money.png" class="card-img-top img-fluid" alt="card-img"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Affordable Pricing</h5>
                    <p class="card-text">We provide support for business and
                      technology needs, now and into the future.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 py-3 py-lg-2">
              <div class="wow fadeInUp infinite">
                <div class="card">
                  <div class="pl-20 pt-20 pb-20">
                    <img src="/Vector.png" class="card-img-top img-fluid" alt="card-img"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Best Strategy</h5>
                    <p class="card-text">We provide advising and support for business and
                      technology needs, now and into the future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="agency">
        <div class="container-fluid">
          <div class="row w-100">
            <div class="col-lg-6 py-3 py-lg-2 pr-50">
              <div>
                <img src="/2img.png" alt="card-img" class="img-fluid"/>
              </div>
            </div>
            <div class="col-lg-6 py-3 py-lg-2 d-flex-acenter">
              <div>
                <span>HELLO THERE!</span>
                <h1>We're The Largest Business Agency</h1>
                <p>We provide advising and now and into the future support for business and
                  needs, now and into the future.</p>

                <button class="btn primary-btn list-add">Learn More <i
                  class="fa fa-arrow-right" aria-hidden="true"></i></button>

              </div>

              <div class="shape">
                <img src="/shape.png" alt="card-img" class=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="service">
        <div class="container">
          <div class="row pt-50">
            <div class="col-xl-4">
              <div>
                <span>Services</span>
                <h1>We Serve As Your Trusted Advisor</h1>
              </div>
            </div>
            <div class="col-xl-6">
              <div>
                <p>It is a long established fact that a reader will be distracted by the
                  looking at its layout. The point of using Lorem Ipsum is that it has
                  a more-or-less normal distribution of letters.</p>
              </div>
            </div>
          </div>
          <div>
          <div class="row mt-50 mb-50">
            <div class="services col-xl-4 col-md-6 py-3 py-lg-2">
              <a class="dropdown-item" href="digital_transformation">
                <div>
                  <img src="Rectangle-11.png" class="w-100 img-fluid" alt="card-img"/>
                    <div class="overlay"></div>
                    <div class="img-title">
                      <h3>Digital Transformation</h3>
                    </div>
                </div>
              </a>
            </div>
            {/* <div >
              <div>
                <img src="/Rectangle-12.png" class="w-100 image-fluid" alt="card-img"/>
                  <div class="overlay"></div>
                  <div class="img-title1">
                    <h3>Cyber Security</h3>
                  </div>
              </div>
            </div> */}
            <div class="services col-xl-4 col-md-6 py-3 py-lg-2">
              <a class="dropdown-item" href="portfolio_management">
                <div>
                  <img src="/Rectangle-13.png" class="w-100 img-fluid" alt="card-img"/>
                    <div class="overlay"></div>
                    <div class="img-title2">
                      <h3>Portfolio Management</h3>
                    </div>
                </div>
              </a>
            </div>
            <div class="services col-xl-4 col-md-6 py-3 py-lg-2">
              <a class="dropdown-item" href="resource_staffing">
                <div>
                  <img src="/Rectangle-20.png" class="w-100 img-fluid" alt="card-img"/>
                    <div class="overlay"></div>
                    <div class="img-title3">
                      <h3>Resource & Staffing</h3>
                    </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section class="carousel-section pt-50 pb-50 ">
        <h1 class="text-center">Testimonial</h1>
        <div id="carouselExampleControls" class="carousel slide pt-50" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="row slide-1">
                  <div class="col-lg-6 d-flex-acenter">
                    <div>
                      <div class="carousel-content">
                        <img class="quote1 img-fluid" src="/quote-1.png" alt="quote"/>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            specimen book. It has survived not only five centuries.
                          </p>
                          <img class="quote2 img-fluid" src="/quote-2.png" alt="quote"/>
                          </div>
                          <div class="names">
                            <h3>Alex Stephen</h3>
                            <span>Chief Financial Officer</span>
                          </div>
                      </div>

                    </div>
                    <div class="col-lg-6 py-lg-2 py-3">
                      <img class="img-fluid slide-img" src="/Group07.png" alt="slide-img"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row slide-1">
                    <div class="col-lg-6 d-flex-acenter">
                      <div>
                        <div class="carousel-content">
                          <img class="quote1 img-fluid" src="/quote-1.png') ?>" alt="quote"/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the
                              1500s,
                              when an unknown printer took a galley of type and scrambled it to make a
                              specimen book. It has survived not only five centuries.
                            </p>
                            <img class="quote2 img-fluid" src="/quote-2.png') ?>" alt="quote"/>
                            </div>
                            <div class="names">
                              <h3>Alex Stephen</h3>
                              <span>Chief Financial Officer</span>
                            </div>
                        </div>

                      </div>
                      <div class="col-lg-6 py-lg-2 py-3">
                        <img class="img-fluid slide-img" src="/Group07.png') ?>" alt="slide-img"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row slide-1">
                      <div class="col-lg-6 d-flex-acenter">
                        <div>
                          <div class="carousel-content">
                            <img class="" alt="quote"/>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                specimen book. It has survived not only five centuries.
                              </p>
                              <img class="quote2 img-fluid" src="/quote-2.png" alt="quote"/>
                              </div>
                              <div class="names">
                                <h3>Alex Stephen</h3>
                                <span>Chief Financial Officer</span>
                              </div>
                          </div>

                        </div>
                        <div class="col-lg-6 py-lg-2 py-3">
                          <img class="img-fluid slide-img" src="/Group07.png" alt="slide-img"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" data-bs-slide="prev"
                  data-bs-target="#carouselExampleControls">
                  <span><i class="fa fa-angle-left left" aria-hidden="true"></i></span>
                  <div class="dot-prev"></div>
                </button>
                <button class="carousel-control-next" data-bs-slide="next"
                  data-bs-target="#carouselExampleControls">
                  <span><i class="fa fa-angle-right right" aria-hidden="true"></i></span>
                  <div class="dot-next"></div>
                </button>
              </div>
            </section>

            <section class="address-section pt-50 pb-50">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-4 py-3 py-lg-2">
                    <div>
                      <div class="card">
                        <div class="pl-20 pt-20">
                          <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Email Address</h5>
                          <p class="card-text">info@evolvingtech.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 py-3 py-lg-2">
                    <div>
                      <div class="card">
                        <div class="pl-20 pt-20">
                          <i class="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Phone Numbers</h5>
                          <p class="card-text">TEL: +2-232-3243</p>
                          <p class="card-text">PH: +91-232(985)-3243</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 py-3 py-lg-2">
                    <div>
                      <div class="card">
                        <div class="pl-20 pt-20">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Location</h5>
                          <p class="card-text">We provide advising</p>
                          <p class="card-text">We provide advising, Lorum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="contact-us-section pt-50 pb-50">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 py-md-3">
                    <div>
                      <span>Contact Us</span>
                      <h1>We're The Fastest Growing Agency</h1>
                      <iframe width="100%" height="430"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                  </div>

                  <div class="col-lg-6 py-md-3">
                    <div>
                      <div class="row mb-26">
                        <div class="col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label">Name <span
                            class="required">*</span></label>
                          <input type="email" class="form-control" id="name"
                            placeholder="Your Name"/>
                        </div>
                        <div class="col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label">Phone <span
                            class="required">*</span></label>
                          <input type="email" class="form-control" id="phone number"
                            placeholder="Your Phone"/>
                        </div>
                      </div>
                      <div class="row mb-26">
                        <div class="col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label">Email <span
                            class="required">*</span></label>
                          <input type="email" class="form-control" id="email-id"
                            placeholder="Your Email"/>
                        </div>
                        <div class="col-sm-6">
                          <label for="exampleFormControlInput1" class="form-label">Services</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-26">
                        <div class="col-12 py-sm-2">
                          <label for="exampleFormControlTextarea1" class="form-label">Message <span
                            class="required">*</span></label>
                          <textarea class="form-control" placeholder="Message" id="message"
                            rows="3"></textarea>
                        </div>
                      </div>
                      <div class="row mb-26">
                        <div class="col-12 py-sm-2">
                          <button type="button" class="btn btn-submit">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
}
