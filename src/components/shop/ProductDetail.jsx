import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductService from "../../services/ProductService"
import Banner from "../layouts/Banner"

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
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <h5>{product.description}</h5>
        </div>
    )
}