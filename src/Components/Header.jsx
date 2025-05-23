import NavBar from "./NavBar"
export default function Header() {
    return(
        <div>
        <NavBar />
        <div className="row">
            <div className="col-lg-6">
                <h1>Raining Offers For Hot Summer</h1>
                <p>25% Off On All Products</p>
                <button type="button" class="btn btn-lg btn-secondary">Shop Now</button>
                <button type="button" class="btn btn-lg btn-outline-secondary">Find More</button>
            </div>
            <div className="col-lg-6">
                <h1>Raining Offers For Hot Summer</h1>
                <p>25% Off On All Products</p>
                <button type="button" class="btn btn-lg btn-secondary">Shop Now</button>
                <button type="button" class="btn btn-lg btn-outline-secondary">Find More</button>
            </div>
        </div>
        </div>
    )
}