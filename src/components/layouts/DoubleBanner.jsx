export default function DoubleBanner() {
    return (
        <div className="banner-section section pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="single-banner">
                            <img src="assets/imgs/banner/1.jpg" alt="banner" />
                            <div className="banner-content right">
                                <h1 className="white">
                                    <span>Gifts</span>Christmas
                                </h1>
                                <a href="shop" className="button">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="single-banner">
                            <img src="assets/imgs/banner/2.jpg" alt="banner" />
                            <div className="banner-content left">
                                <h2 className="black">
                                    <span className="small">
                                        Save<span className="red ml-13">25%</span>
                                    </span>
                                    <span className="red">Offer</span> 30/4 - 1/5
                                </h2>
                                <a href="shop" className="link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}