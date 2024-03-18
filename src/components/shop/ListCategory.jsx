import { useEffect, useState } from "react"
import CategoryService from "../../services/CategoryService"

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

    return (
        <div>
            <h1>Categories</h1>
            <div className="list-group">
                {categories.map(
                    category =>
                    (
                        <p className="list-group-item list-group-item-action list-group-item-success"
                            key={category.id}
                            onClick={() => handleIdSelect(category.id)}
                        >{category.name}</p>
                    )
                )}
            </div>
        </div>
    )
}