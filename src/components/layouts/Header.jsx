import { faFacebook, faInstagram, faShopify, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom/dist";

export default function Header() {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : ""
        }
    }

    return (
        <>
            {/* Header Top Start */}
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Header Top Wrapper Start */}
                            <div className="header-top-wrapper">
                                <div className="row">
                                    {/* Header Social */}
                                    <div className="header-social col-md-4 col-12">
                                        <a href="https://www.facebook.com/">
                                            <FontAwesomeIcon className="text-primary" icon={faFacebook} style={{ fontSize: "23px" }} />
                                        </a>
                                        <a href="https://www.tiktok.com/">
                                            <FontAwesomeIcon className="text-dark ml-13" icon={faTiktok} style={{ fontSize: "23px" }} />
                                        </a>
                                        <a href="https://www.instagram.com/?hl=en">
                                            <FontAwesomeIcon className="text-danger ml-13" icon={faInstagram} style={{ fontSize: "23px" }} />
                                        </a>
                                        <a href="https://www.instagram.com/?hl=en">
                                            <FontAwesomeIcon className="text-warning ml-13" icon={faShopify} style={{ fontSize: "23px" }} />
                                        </a>

                                    </div>
                                    {/* Header Logo */}
                                    <div className="header-logo col-md-4 col-12">
                                        <a href="/" className="logo">
                                            <img src={`${process.env.PUBLIC_URL}/assets/imgs/logos/logo1.jpg`} style={{ width: "28%", marginLeft: "120px" }} alt="logo" />
                                        </a>
                                    </div>
                                    {/* Account Menu */}
                                    <div className="account-menu col-md-4 col-12">
                                        <ul>
                                            <li>
                                                <a href="/">My Account</a><FontAwesomeIcon className="ml-13" style={{ fontSize: "20px" }} icon={faUser} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Header Top Wrapper End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Top End */}
            {/* Header Bottom Start */}
            <div className="header-bottom section">
                <div className="container">
                    <div className="row">
                        {/* Header Bottom Wrapper Start */}
                        <div className="header-bottom-wrapper text-center col">
                            {/* Main Menu */}
                            <nav id="main-menu" className="main-menu">
                                <ul>
                                    <li>
                                        <NavLink style={navLinkStyle} to={'/'}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={navLinkStyle} to={'/shop'}>Shop</NavLink>
                                        <ul class="sub-menu">
                                            <li><Link to={"/shop/box"}>Box</Link></li>
                                            <li><Link to={"/shop/gift"}>Gift</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink style={navLinkStyle} to={'/about'}>About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={navLinkStyle} to={'/page'}>Pages</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={navLinkStyle} to={'/contact'}>Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            {/* Header Search */}
                        </div>
                        {/* Header Bottom Wrapper End */}
                    </div>
                </div>
            </div>
            {/* Header Bottom End */}
            {/* Header Section End */}
        </>
    )
}