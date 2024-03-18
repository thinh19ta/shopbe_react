import Banner from "../layouts/Banner";
import DoubleBanner from "../layouts/DoubleBanner";


export default function Home() {
    return (
        <div>
            <Banner content={"Home page"} />
            <DoubleBanner />
        </div>
    )
}