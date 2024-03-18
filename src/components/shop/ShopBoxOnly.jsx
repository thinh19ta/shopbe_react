import { useState } from "react";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import Banner from "../layouts/Banner";

export default function ShopBoxOnly() {

    return (
        <div>
            <Banner content={"Shop page"} />
            <div >
                <ListProduct categoryId={1} />
            </div>
        </div>

    )
}