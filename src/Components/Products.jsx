export default function Products() {
  return (
    <div className="produccts">
      {/* Categories section start */}
      <div className="row  Categories">
        <h2>Categories</h2>

        <div className="col-lg-4">
          <div className="card  w-auto p-3 cart-body">
            <img src="/images/HC0.jpg" alt="picture" />
            <div className="card-body">
              <h3 className="card-title">Men Sandals</h3>
              <p className="card-text">
                We sell all kinds of Men Birkenstock and an affordable prices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card  w-auto p-3 cart-body">
            <img src="/images/HC15.jpg" alt="picture" />
            <div className="card-body">
              <h3 className="card-title">Men Crosses</h3>
              <p className="card-text">
                We sell kinds Birkenstock crosses for both men and women at an
                affordable prices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card  w-auto p-3 cart-body">
            <img src="/images/HC12.jpg" alt="picture" />
            <div className="card-body">
              <h3 className="card-title">Women Sandals</h3>
              <p className="card-text">
                We sell all kinds of Birkenstock sandals for ladies at an
                affordable prices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Categories section end */}

      {/* Feature products section end */}
      <div className="row feature-sandals">
        <h2>Feature Sandals</h2>
        <div className="col-lg-3">
          <div className="card">
            <img src="/images/HC2.jpg" alt="picture" />
            <div className="card-body">
              <h5 className="card-title">BirkenStock Sandals</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <span className="cross-price">Ghc190 </span> Ghc170
              </p>
              <p className="stars">
                Rate{' '}
                <span>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </span>
              </p>
              <a href="#" className="btn btn-primary button">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <img src="/images/HC11.jpg" alt="picture" />
            <div className="card-body">
              <h5 className="card-title">BirkenStock Sandals</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <span className="cross-price">Ghc170 </span> Ghc150
              </p>
              <p>
                Rate{' '}
                <span>
                  <i className="fa fa-star checked stars"></i>
                  <i className="fa fa-star checked stars"></i>
                  <i className="fa fa-star checked stars"></i>
                  <i className="fa fa-star checked stars"></i>
                  <i className="fa-solid fa-star-half-stroke stars"></i>
                </span>
              </p>
              <a href="#" className="btn btn-primary button">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <img src="/images/HC0.jpg" alt="picture" />
            <div className="card-body">
              <h5 className="card-title">BirkenStock Sandals</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <span className="cross-price">Ghc150 </span> Ghc130
              </p>
              <p className="stars">
                Rate{' '}
                <span>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </span>
              </p>
              <a href="#" className="btn btn-primary button">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card small">
            <img src="/images/HC1.jpg" alt="picture" />
            <div className="card-body">
              <h5 className="card-title">BirkenStock Sandals</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <span className="cross-price">Ghc200 </span> Ghc180
              </p>
              <p className="stars">
                Rate{' '}
                <span>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </span>
              </p>
              <a href="#" className="btn btn-primary button">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Feature products section end */}

      {/* Special offers section end */}
      <div className="row special-offers">
        <h2>Limited Offers</h2>
        <div className="col-lg-6 special-message">
          <h1>Special Edition</h1>
          <p>
            We have a special offers for all our customers buying any of the
            sandals up to Ghc1000.
          </p>
          <h4>Buy This Sandals At 10% Discount, Use Code OFF10</h4>
          <button type="button" className="btn btn-lg btn-outline-primary">
            Shop Now
          </button>
        </div>
        <div className="col-lg-6">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img
                  src="/images/HC13.jpg"
                  className="d-block w-50 special-sandals"
                  alt="sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/HC10.jpg"
                  className="d-block w-50 special-sandals"
                  alt="sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/HC12.jpg"
                  className="d-block w-50 special-sandals"
                  alt="sandals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Special offers section end */}

      {/* Values Section  Start*/}
      <div className="row values">
        <h2>Key Values</h2>
        <div className="col-lg-3 values-message">
          <h3>Nationwide Delivery</h3>
          <p>
            Your location is no longer a problem, we deliver across the nation!
          </p>
        </div>
        <div className="col-lg-3 values-message">
          <h3>Best Quality</h3>
          <p>We give you the best quality Birkenstock sandals</p>
        </div>
        <div className="col-lg-3 values-message">
          <h3>Best Offers</h3>
          <p>We have a reaosonable prices for all the sandals we sell</p>
        </div>
        <div className="col-lg-3 values-message">
          <h3>Easy payment</h3>
          <p>
            Work is already hard so why make payment harder? Our payment methods
            are made simple just for you.
          </p>
        </div>
      </div>
      {/* Values Section end */}
    </div>
  );
}
