import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout>
            <section class="banner-aboutus-section">
                <div class="container-fluid p-0">
                    <div class="row banner-content banner-aboutus">
                        <div class="banner-degital-details text-center">
                            <div class="col-6 offset-3 degital-details ">
                                <h1 class="my-lg-3">About Us</h1>
                                <h6>Home <span></span> About Us</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-us-section pt-50 pb-50">
                <div class="container">
                    <div class="row contact-form">
                        <div class="col-lg-6 py-md-3 position-relative">
                            <div>
                                <img src="/aboutus-img.png" class="img-fluid" alt="form-img"/>
                                    <div class="years">
                                        <h1>10</h1>
                                        <p>Years in Success</p>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-6 py-md-3 d-flex-acenter">
                            <div>
                                <span>WHO WE ARE</span>
                                <h1>We're The Largest Business Agency</h1>
                                <p class="py-3">We provide advising and now and into the future support for business and
                                    needs, now and into the future.</p>
                                <p>We provide advising and now and into the future support for business and
                                    needs, now and into the future and into the future support for business.</p>
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
                                <h1>We Served as your wish for success</h1>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div>
                                <p>It is a long established fact that a reader will be distracted by the
                                    looking at its layout. The point of using Lorem Ipsum is that it.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-50 mb-50">
                        <div class="services col-xl-3 col-md-6 py-3 py-lg-2">
                            <div>
                                <img src="/Rectangle-11.png" class="w-100 img-fluid" alt="card-img"/>
                                    <div class="img-title">
                                        <h3>Digital Transformation</h3>
                                    </div>
                            </div>
                        </div>
                        <div class="services col-xl-3 col-md-6 py-3 py-lg-2">
                            <div>
                                <img src="/Rectangle-12.png" class="w-100 image-fluid" alt="card-img"/>
                                    <div class="img-title1">
                                        <h3>Cyber Security</h3>
                                    </div>
                            </div>
                        </div>
                        <div class="services col-xl-3 col-md-6 py-3 py-lg-2">
                            <div>
                                <img src="/Rectangle-13.png" class="w-100 img-fluid" alt="card-img"/>
                                    <div class="img-title2">
                                        <h3>Portfolio Management</h3>
                                    </div>
                            </div>
                        </div>
                        <div class="services col-xl-3 col-md-6 py-3 py-lg-2">
                            <div>
                                <img src="/Rectangle-20.png" class="w-100 img-fluid" alt="card-img"/>
                                    <div class="img-title3">
                                        <h3>Resource & Staffing</h3>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="customers py-5">
                <div class="container">
                    <div class="row contact-form">
                        <div class="col-md-6 py-md-3 position-relative">
                            <h1>Convert more visitors into customers </h1>
                        </div>
                        <div class="col-md-6 py-md-3 position-relative">
                            <div class="started">
                                <button class="btn btn-customer">Get Started Today</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="clients py-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-12">
                            <span>OUR CLIENTS</span>
                        </div>
                        <div class="col-12">
                            <h1>Clients We are Proud of</h1>
                        </div>
                        <div class="col-12 py-3">
                            <p>It is a long established fact that a reader will be distracted by the
                                looking at its layout. The point of using Lorem Ipsum is that it.</p>
                        </div>
                    </div>
                    <div class="contain">
                        <div class="owl-carousel owl-theme" id="owl-demo">
                            <div class="client-logo">
                                <img src="/Group-172.png" alt="slide1"/>
                            </div>
                            <div class="client-logo">
                                <img src="/Group-173.png" alt="slide2"/>
                            </div>
                            <div class="client-logo">
                                <img src="/Group-174.png" alt="slide3"/>
                            </div>
                            <div class="client-logo">
                                <img src="/Group-172.png" alt="slide1"/>
                            </div>
                            <div class="client-logo">
                                <img src="/Group-173.png" alt="slide2"/>
                            </div>
                            <div class="client-logo">
                                <img src="/Group-174.png" alt="slide3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
