import { useEffect, useState } from "react"
import CategoryService from "../../services/CategoryService"
import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGift, faHatWizard, faLeaf, faRing, faTree } from "@fortawesome/free-solid-svg-icons"

export default function ListCategory({ onIdSelect }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        CategoryService.getAllCategories().then(
            res => {
                setCategories(res.data)
            }
        )
    }, [])

    const handleIdSelect = (id) => {
        onIdSelect(id)
    }

    // return (
    //     <div>
    //         <h1>Categories</h1>
    //         <div className="list-group">
    //             {categories.map(
    //                 category =>
    //                 (
    //                     <p className="list-group-item list-group-item-action list-group-item-success"
    //                         key={category.id}
    //                         onClick={() => handleIdSelect(category.id)}
    //                     >{category.name}</p>
    //                 )
    //             )}
    //         </div>
    //     </div>
    // )
    return (
        <div className="section">
            <div className="container mt-15" style={{ textAlign: "center", borderRadius: "30px" }}>
                <div className="row">
                    <div className="col-md-2" onClick={() => handleIdSelect(1)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faShopify} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Trang sức</p>
                    </div>
                    <div className="col-md-2" onClick={() => handleIdSelect(2)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faRing} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Thời trang</p>
                    </div>
                    <div className="col-md-2" onClick={() => handleIdSelect(3)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faGift} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Đồ lưu niệm</p>
                    </div>
                    <div className="col-md-2" onClick={() => handleIdSelect(4)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faHatWizard} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Phụ kiện</p>
                    </div>
                    <div className="col-md-2" onClick={() => handleIdSelect(5)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faTree} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Hoa</p>
                    </div>
                    <div className="col-md-2" onClick={() => handleIdSelect(1)}>
                        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faLeaf} />
                        <p className="mt-2 text-dark" style={{ fontSize: "18px", cursor: "pointer" }} >Sấy khô</p>
                    </div>
                </div>
            </div>
        </div>

    )
}