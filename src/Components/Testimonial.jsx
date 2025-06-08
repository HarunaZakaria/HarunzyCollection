export default function Testimonial() {
  return (
    <>
      <div className="testimonials">
        <h2>What Our Customers Say About Us</h2>
        {/* <div
          id="testimonial-carousel"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>
                I no longer have to sniff other dogs for love. I've found the
                hottest Corgi on TinDog. Woof.
              </h2>
              <img
                class="testi-image"
                src="images/HC15.jpg"
                alt="dog-profile"
              />
              <em>Pebbles, New York</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonial-text">
                My dog used to be so lonely, but with TinDog's help, they've
                found the love of their life. I think.
              </h2>
              <img
                class="testi-image"
                src="images/HC8.jpg"
                alt="lady-profile"
              />
              <em>Beverly, Illinois</em>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <p class="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </p>
                  <img
                    class="testi-image"
                    src="images/HC8.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
                <div className="carousel-item">
                  <p class="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </p>
                  <img
                    class="testi-image"
                    src="images/HC8.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
                <div className="carousel-item">
                  <p class="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </p>
                  <img
                    class="testi-image"
                    src="images/HC10.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
                <div className="carousel-item">
                  <p class="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </p>
                  <img
                    class="testi-image"
                    src="images/HC13.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
                <div className="carousel-item">
                  <p class="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </p>
                  <img
                    class="testi-image"
                    src="images/HC4.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
