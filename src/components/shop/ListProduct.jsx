import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../../services/ProductService"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

function ListProduct({ categoryId }) {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryId) {
            ProductService.getAllProductsByCategory(categoryId).then(
                res => {
                    setProducts(res.data)
                }
            )
        }
        else {
            ProductService.getAllProducts().then(
                res => {
                    setProducts(res.data)
                }
            )
        }
    }, [categoryId])

    const handleProductDetail = (id) => {
        navigate(`/shop/product/${id}`)
    }

    return (
        <div className="product-section section pt-120 pb-120">
            <div className="container">
                <div class="row">
                    <div class="section-title text-center col mb-60">
                        <h1>Featured Products</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(
                            product => (
                                <div className="col-lg-4 col-md-6 col-12  mb-60" key={product.id} >
                                    <div className="product">
                                        <div className="image">
                                            <a href="shop" onClick={(e) => { e.preventDefault(); handleProductDetail(product.id) }} className="img">
                                                <img src="assets/imgs/product/1.jpg" alt="Product" />
                                            </a>
                                            <a href="/" className="wishlist"><FontAwesomeIcon style={{ marginTop: "13px" }} icon={faHeart} /></a>
                                            <span className="label">New</span>
                                        </div>
                                        <div className="content">
                                            <div className="head fix">
                                                <div className="title-category float-left">
                                                    <h5 className="title text-danger"><a href="/shop" onClick={(e) => { e.preventDefault(); handleProductDetail(product.id) }}>{product.name}</a></h5>
                                                    <a href="shop.html" className="category">Catalog</a>
                                                </div>
                                                <div className="price float-right">
                                                    <span className="new">{product.price}đ</span>
                                                </div>
                                            </div>
                                            <div className="action-button fix">
                                                <a href="/">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProduct