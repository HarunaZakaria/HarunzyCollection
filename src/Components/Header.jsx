import NavBar from './NavBar';
export default function Header() {
  return (
    <div>
      <NavBar />
      {/* Header top section  start*/}
      <div className="row header-message">
        <div className="col-lg-6 offers">
          <h1>We Bring You All The Awesome BirkenStock Sandals</h1>
          <p>The best ever in the market!</p>
          <button type="button" className="btn btn-lg btn-warning header-btn">
            Shop Now
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary header-btn"
          >
            Find More
          </button>
        </div>
        <div className="col-lg-6 header-carousal">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/sandals8.jpg"
                  className="d-block w-70"
                  alt="Sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sandals9.jpg"
                  className="d-block w-70"
                  alt="Sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sandals10.jpg"
                  className="d-block w-70"
                  alt="Sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sandals11.jpg"
                  className="d-block w-70"
                  alt="Sandals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sandals5.jpg"
                  className="d-block w-70"
                  alt="Sandals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header top section  end*/}
    </div>
  );
}
