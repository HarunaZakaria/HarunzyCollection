import NavBar from "./NavBar"
export default function Header() {
    return(
        <div>
            <NavBar />
            {/* Header top section  start*/}
            <div className="row header-message">
                <div className="col-lg-6">
                    <h1>Raining Offers For Hot Summer</h1>
                    <p>25% Off On All Products</p>
                    <button type="button" className="btn btn-lg btn-secondary">Shop Now</button>
                    <button type="button" className="btn btn-lg btn-outline-secondary">Find More</button>
                </div>
                <div className="col-lg-6">
                    <img src="/images/sandals.jpg" alt="" />
                </div>
            </div>
            {/* Header top section  end*/}

            {/* Categories section start */}

            <div className="row header-message">
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                </div>
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                </div>
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                </div>
            </div>
            {/* Categories section end */}
        </div>
    )
}