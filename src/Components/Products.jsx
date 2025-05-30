export default function Products(){
    return(
        <div className="produccts">
            {/* Categories section start */}
            <div className="row  Categories">
                <h2>Categories</h2>
                <div className="col-lg-4 cate-back1">
                    {/* <img src="/images/sandals.jpg" alt="picture" /> */}
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                </div>
                <div className="col-lg-4 cate-back2">
                    {/* <img src="/images/sandals.jpg" alt="picture" /> */}
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                </div>
                <div className="col-lg-4 cate-back3">
                    {/* <img src="/images/sandals.jpg" alt="picture" /> */}
                    <h3>20% Off On Tank Tops</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo eveniet tenetur adipisci debitis voluptas accusamus 
                        voluptatum pariatur voluptate nostrum ut.
                    </p>
                </div>
            </div>
            {/* Categories section end */}

            {/* Feature products section end */}
            <div className="row feature-products">
                <h2>Feature Products</h2>
                <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals0.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">BirkenStock Sandals</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <p><span className="cross-price">Ghc150 </span> Ghc130</p>
                            <p className="stars">Rate <span>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                 <i className="fa-solid fa-star-half-stroke"></i>
                                </span>
                            </p>
                            <a href="#" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals3.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">BirkenStock Sandals</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <p><span className="cross-price">Ghc150 </span> Ghc130</p>
                            <p className="stars">Rate <span>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                 <i className="fa-solid fa-star-half-stroke"></i>
                                </span>
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card">
                        <img src="/images/sandals2.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">BirkenStock Sandals</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <p><span className="cross-price">Ghc150 </span> Ghc130</p>
                            <p className="stars">Rate <span>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                 <i className="fa-solid fa-star-half-stroke"></i>
                                </span>
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-3">
                    <div className="card small">
                        <img src="/images/sandals1.jpg" alt="picture" />
                        <div className="card-body">
                            <h5 className="card-title">BirkenStock Sandals</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <p><span className="cross-price">Ghc150 </span> Ghc130</p>
                            <p className="stars">Rate <span>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa fa-star checked"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                </span>
                            </p>
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
    );
}