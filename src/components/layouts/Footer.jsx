export default function Footer() {
    return (
        <>
            {/* Footer Section Start*/}
            <div
                className="footer-section section bg-dark"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/imgs/bg/footer-bg.png)` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Footer Top Start */}
                            <div className="footer-top section pt-80 pb-50">
                                <div className="row">
                                    {/* Footer Widget */}
                                    <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">
                                        <img
                                            className="footer-logo"
                                            src={`${process.env.PUBLIC_URL}/assets/imgs/logos/logo3.jpg`}
                                            style={{ width: "28%", borderRadius: "50%" }}
                                            alt="logo"
                                        />
                                        <p>
                                            Surprise Box rất vui khi được chia sẻ những khoảnh khắc đặc biệt của cuộc sống cùng bạn.
                                        </p>
                                    </div>
                                    {/* Footer Widget */}
                                    <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                        <h4 className="widget-title">Information</h4>
                                        <ul>
                                            <li>
                                                <a href="/about">About us</a>
                                            </li>
                                            <li>
                                                <a href="/about">Team member</a>
                                            </li>
                                            <li>
                                                <a href="#/shop">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="/">Portfolio</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Footer Widget */}
                                    {/* <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                        <h4 className="widget-title">Categories</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Costumes</a>
                                            </li>
                                            <li>
                                                <a href="#">Lights</a>
                                            </li>
                                            <li>
                                                <a href="#">Lights</a>
                                            </li>
                                            <li>
                                                <a href="#">Christmas Trees</a>
                                            </li>
                                            <li>
                                                <a href="#">Decorations</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                    {/* Footer Widget */}
                                    <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul>
                                            <li>
                                                <span>Address:</span> Hòa Hải, Ngũ Hành Sơn, Đà Nẵng, Việt Nam
                                            </li>
                                            <li>
                                                <span>Phone:</span> 099999999
                                            </li>
                                            <li>
                                                <span>Email:</span> surprisebox@email.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer Top End */}

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section End*/}
        </>

    )
}