import { useState } from "react";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import Banner from "../layouts/Banner";

export default function Shop() {

    const [categoryId, setCategoryId] = useState()

    const handleIdSelect = (id) => {
        setCategoryId(id)
    }

    return (
        <div>
            <Banner content={"Shop page"} />
            <div>
                <ListCategory onIdSelect={handleIdSelect} />
            </div>
            <div >
                <ListProduct categoryId={categoryId} />
            </div>
        </div>

    )
}