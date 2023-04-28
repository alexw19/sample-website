const Footer = () => {
    return (
        <div className="container">
            <footer class="footer pt-50 pb-50 position-relative bg-dark text-white">
                <img src="/logo-01.png" class="image-fluid footer-logo" alt="slide-img"/>
                    <div class="container position-relative">
                        <div class="row footer-content">
                            <div class="col-lg-2 links">
                                <h3 class="my-md-3">Links</h3>
                                <ul class="function-change">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Solutions</li>
                                    <li>Blogs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div class="col-lg-4 ">
                                <h3 class="my-md-3">Recents News</h3>
                                <div class="row type-change">
                                    <div class=" col-lg-3">
                                        <img src="/footer-img2.png" class="mt-12 img-fluid" alt="footer-img"/>
                                    </div>
                                    <div class=" col-lg-9 col-xl-8">
                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
                                        <span>Fabruary 20, 2022</span>
                                    </div>
                                </div>
                                <div class="row mt-24">
                                    <div class="col-lg-3">
                                        <img src="/footer-img.png" class="mt-12 img-fluid" alt="footer-img"/>
                                    </div>
                                    <div class="col-lg-9 col-xl-8">
                                        <p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
                                        <span>Fabruary 20, 2022</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 ">
                                <h3 class="type-add">Solutions</h3>
                                <ul class="bottom-text">
                                    <li>Digital Transformation</li>
                                    <li>Cyber Security Consulting</li>
                                    <li>Portfolio Management</li>
                                    <li>Resource & Staffing</li>
                                </ul>
                            </div>
                            <div class="my-md-2 col-md-6 col-lg-3">
                                <h3 class="list-function">Opening Time</h3>
                                <p class="bottom-section">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED </p>

                                <div class="social-media">
                                    <h4>Social Media</h4>
                                    <div class="d-flex">
                                        <div class="icons facebook mr-18">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </div>
                                        <div class="icons twiter mr-18">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div class="icons youtube mr-18">
                                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        </div>
                                        <div class="icons insta">
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-20 text-center">
                            <p>© Copyright Evolving Tech Solutions Private Limited 2022. All Rights Reserved.</p>
                        </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;