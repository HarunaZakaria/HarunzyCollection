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
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="/images/sandals.jpg" class="d-block w-50" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="/images/sandals.jpg" class="d-block w-50" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="/images/sandals.jpg" class="d-block w-50" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
            {/* Special offers section end */}
        </div>
    )
}