import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductService from "../../services/ProductService"
import Banner from "../layouts/Banner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHeart, faPrint, faStar } from "@fortawesome/free-solid-svg-icons"
import CurrencyFormat from "react-currency-format"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState('')

    useEffect(() => {
        ProductService.getProductById(id).then(
            res => {
                setProduct(res.data)
            }
        )
    }, [id])

    return (
        <div>
            <Banner content={"Product detail"} />
            <div className="product-section section pt-110 pb-90">
                <div className="container">
                    {/* Product Wrapper Start*/}
                    <div className="row">
                        {/* Product Image & Thumbnail Start */}
                        <div className="col-lg-7 col-12 mb-30">
                            <div className="product-details-wrapper">
                                {/* Product Thumbnail */}
                                <div className="single-product-thumbnail product-thumbnail-slider float-left"></div>
                                {/* Product Image */}
                                <div className="single-product-image product-image-slider fix">
                                    <div className="single-image">
                                        <img
                                            src="https://th.bing.com/th/id/OIG1.0ODAABWBHyg7gqhH8G2g?pid=ImgGn"
                                            alt="productImage"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Image & Thumbnail End */}
                        {/* Product Content Start */}
                        <div className="single-product-content col-lg-5 col-12 mb-30">
                            {/* Title */}
                            <h1 className="title">{product.name}</h1>
                            {/* Product Rating */}
                            <span className="product-rating">
                                <FontAwesomeIcon className="text-warning" icon={faStar} />
                                <FontAwesomeIcon className="text-warning" icon={faStar} />
                                <FontAwesomeIcon className="text-warning" icon={faStar} />
                                <FontAwesomeIcon className="text-warning" icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            {/* Price */}
                            <span className="product-price"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnd'} /></span>
                            {/* Description */}
                            <div className="description">
                                <p>{product.description}</p>
                            </div>
                            {/* Color */}
                            <div className="product-color fix">
                                <h5>Select Color</h5>
                                <form action="#">
                                    <div className="color-box">
                                        <input type="radio" name="color" id="color-1" />
                                        <label htmlFor="color-1" style={{ backgroundColor: "#51bd99" }}>
                                            color 1
                                        </label>
                                    </div>
                                    <div className="color-box">
                                        <input type="radio" name="color" id="color-2" />
                                        <label htmlFor="color-2" style={{ backgroundColor: "#83a931" }}>
                                            color 2
                                        </label>
                                    </div>
                                    <div className="color-box">
                                        <input type="radio" name="color" id="color-3" />
                                        <label htmlFor="color-3" style={{ backgroundColor: "#c8001e" }}>
                                            color 3
                                        </label>
                                    </div>
                                    <div className="color-box">
                                        <input type="radio" name="color" id="color-4" />
                                        <label htmlFor="color-4" style={{ backgroundColor: "#414141" }}>
                                            color 4
                                        </label>
                                    </div>
                                </form>
                            </div>
                            {/* Quantity & Cart Button */}
                            <div className="product-quantity-cart fix">
                                <div className="product-quantity">
                                    <input type="text" min={0} defaultValue={0} name="qtybox" />
                                </div>
                                <button className="add-to-cart">add to cart</button>
                            </div>
                            {/* Action Button */}
                            <div className="product-action-button fix">
                                <button>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="ml-13"></span>
                                    Email to a friend
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className="ml-13"></span>
                                    Wishlist
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faPrint} />
                                    <span className="ml-13"></span>
                                    <i className="ion-ios-printer-outline" />
                                    Print
                                </button>
                            </div>
                            {/* Social Share */}
                            {/* <div className="product-share fix">
                                <h6>Share :</h6>
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-pinterest-p" />
                                </a>
                            </div> */}
                        </div>
                        {/* Product Content End */}
                    </div>
                    {/* Product Wrapper End*/}
                    {/* Product Additional Info Start*/}
                    <div className="row">
                        {/* Nav tabs */}
                        <div className="col-12 mt-30">
                            <ul className="pro-info-tab-list nav">
                                <li>
                                    <a className="active" data-bs-toggle="tab" href="#more-info">
                                        More info
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tab" href="#data-sheet">
                                        Data sheet
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tab" href="#reviews">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Tab panes */}
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                            <div className="pro-info-tab tab-pane" id="data-sheet">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="odd">
                                            <td>Compositions</td>
                                            <td>Cotton</td>
                                        </tr>
                                        <tr className="even">
                                            <td>Styles</td>
                                            <td>Casual</td>
                                        </tr>
                                        <tr className="odd">
                                            <td>Properties</td>
                                            <td>Short Sleeve</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="pro-info-tab tab-pane" id="reviews">
                                <a className="button" href="#">
                                    Be the first to write your review!
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Product Additional Info End*/}
                </div>
            </div>

        </div>
    )
}