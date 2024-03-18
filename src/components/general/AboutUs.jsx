import Banner from "../layouts/Banner";

export default function AboutUs() {
    return (
        <div>
            <Banner content={"About page"} />
            <>
                {/* About Section Start*/}
                <div className="about-section section pt-120 pb-90">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            {/* About Image */}
                            <div className="about-image col-lg-6 col-12 mb-30">
                                <a
                                    className="video-popup"
                                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                >
                                    <img src="assets/imgs/about.jpg" alt="" />
                                </a>
                            </div>
                            {/* Mission Content */}
                            <div className="about-content col-lg-6 col-12 mb-30">
                                <h2>
                                    About <span>Surprise Box</span>
                                </h2>
                                <p>
                                    {" "}
                                    Surprise Box rất vui khi được chia sẻ những khoảnh khắc đặc biệt của
                                    cuộc sống cùng bạn.
                                    <br />
                                    Tại đây, chúng tôi không chỉ bán các sản phẩm, mà chúng tôi còn muốn
                                    tạo ra những trải nghiệm tuyệt vời và ý nghĩa cho bạn và những người
                                    thân yêu của bạn.
                                    <br />
                                    Mỗi dịp lễ, sinh nhật hay những ngày đặc biệt khác, là cơ hội để
                                    chúng tôi kết nối với bạn qua những món quà ý nghĩa.
                                    <br />
                                    Bởi chúng tôi không chỉ chọn lựa các sản phẩm chất lượng mà còn đặt
                                    trái tim vào từng chi tiết để mang đến sự hạnh phúc và ấm áp cho bạn
                                    và người thân của bạn.
                                </p>
                                <a href="/shop" className="button">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Section End*/}
                {/* Team Section Start*/}
                <div className="team-section section pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col mb-60">
                                <h1>Our Team</h1>
                            </div>
                        </div>
                        <div className="team-wrapper row">
                            <div className="single-team col-lg-2 col-md-6 col-12 me-4">
                                <img src="assets/imgs/team/nhung.png" alt="team" />
                                <div className="content">
                                    <h4>Bich Nhung</h4>
                                    <span>CMO</span>
                                </div>
                            </div>
                            <div className="single-team col-lg-2 col-md-6 col-12 me-4">
                                <img src="assets/imgs/team/giang.png" alt="team" />
                                <div className="content">
                                    <h4>Le Giang</h4>
                                    <span>Sale Manager</span>
                                </div>
                            </div>
                            <div className="single-team col-lg-2 col-md-6 col-12 me-4">
                                <img src="assets/imgs/team/ha.png" alt="team" />
                                <div className="content">
                                    <h4>Nhat Ha</h4>
                                    <span>CEO</span>
                                </div>
                            </div>
                            <div className="single-team col-lg-2 col-md-6 col-12 me-4">
                                <img src="assets/imgs/team/nam.png" alt="team" />
                                <div className="content">
                                    <h4>Hai Nam</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                            <div className="single-team col-lg-2 col-md-6 col-12 me-4">
                                <img src="assets/imgs/team/thinh.png" alt="team" />
                                <div className="content">
                                    <h4>Quoc Thinh</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Section End*/}
            </>
        </div>
    )
}