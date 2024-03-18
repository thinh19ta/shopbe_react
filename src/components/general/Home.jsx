import Banner from "../layouts/Banner";
import DoubleBanner from "../layouts/DoubleBanner";
import ListProduct from "../shop/ListProduct";


export default function Home() {
    return (
        <div>
            <Banner content={"Home page"} />
            <DoubleBanner />
            <ListProduct categoryId={1} />
        </div>
    )
}