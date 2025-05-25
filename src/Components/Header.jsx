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
                <h2>Categories</h2>
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                    <button type="button" className="btn btn-warning">Shop Now</button>
                </div>
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                    <button type="button" className="btn btn-warning">Shop Now</button>
                </div>
                <div className="col-lg-4">
                    <img src="/images/sandals.jpg" alt="picture" />
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                    <button type="button" className="btn btn-warning">Check Out</button>
                </div>
            </div>
            {/* Categories section end */}

            {/* Feature products section end */}
            <div className="row">
                <h2>Feature Products</h2>
                <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature products section end */}

            {/* Special offers section end */}
            <div className="row limited-offers">
                <h3>Limited Offers</h3>
                <div className="col-lg-6">
                    <h1>Special Edition</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eum aspernatur accusamus labore similique sequi modi. 
                        Pariatur cupiditate exercitationem aperiam minima.
                    </p>
                    <h2>Buy This Sandals At 20% Discount, Use Code OFF20</h2>
                    <button type="button" className="btn btn-lg btn-outline-primary">Shop Now</button>
                </div>
                <div className="col-lg-6">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="/images/sandals.jpg" className="d-block w-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="/images/sandals.jpg" className="d-block w-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="/images/sandals.jpg" className="d-block w-50" alt="..."/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Special offers section end */}

            {/* Values Section  end */}
            <div className="row">
                <h2>Key Values</h2>
                <div className="col-lg-3">
                    <h3>Nationwide Delivery</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, aut?</p>
                </div>
                 <div className="col-lg-3">
                    <h3>Best Quality</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, aut?</p>
                </div>
                 <div className="col-lg-3">
                    <h3>Best Offers</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, aut?</p>
                </div>
                 <div className="col-lg-3">
                    <h3>Easy payment</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, aut?</p>
                </div>
            </div>
            {/* Values Section end */}
        </div>
    )
}