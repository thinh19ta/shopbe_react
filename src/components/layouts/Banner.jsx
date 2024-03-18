export default function Banner({ content }) {
    return (
        <div
            className="page-banner-section section"
            style={{ backgroundImage: "url(assets/imgs/bg/page-banner.jpg)" }}
        >
            <div className="container">
                <div className="row">
                    {/* Page Title Start */}
                    <div className="page-title text-center col">
                        <h1>{content}</h1>
                    </div>
                    {/* Page Title End */}
                </div>
            </div>
        </div>

    )
}