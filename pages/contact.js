import Layout from '../components/Layout'

const Contact = () => {
    return (
        <Layout>
            {/* <h1>Contact Us</h1>
            <p>You can contact us at the following email address: info@example.com.</p> */}
            <section class="banner-contactus-section">
                <div class="container-fluid p-0">
                    <div class="row banner-content banner-contactus">
                        <div class="banner-degital-details text-center">
                            <div class="col-6 offset-3 degital-details ">
                                <h1 class="my-lg-3">Contact Us</h1>
                                <h6>Home <span></span> Contact Us</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="address-section pt-50 pb-50">
                <div class="container">
                    <div class="text-center contact-address py-4">
                        <div>
                            <h1>We're The Largest Business Agency</h1>
                        </div>
                        <div>
                            <p>It is a long established fact that a reader will be distracted by the
                                looking at its layout.</p>
                        </div>
                    </div>
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
                    <div class="row contact-form">
                        <div class="col-lg-6 py-md-3">
                            <div>
                                <h1>Get In Touch.</h1>
                                <p class="py-2">It is a long established fact that a reader will be distracted by the
                                    looking at its layout.</p>
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

                        <div class="col-lg-6 py-md-3">
                            <div>
                                <img src="/form-page.png" class="img-fluid" alt="form-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container-fluid">
                    <iframe width="100%" height="430"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </section>
        </Layout>
    )
}

export default Contact
