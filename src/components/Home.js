import React from 'react';

const Home = () => {
  return (
    <main>
      {/* <!--Made simple section--> */}
      <section
        id="made-simple"
        className="made-simple section position-relative"
      >
        <div className="container position-relative">
          <div className="d-flex justify-content-center position-relative">
            <h1 className="mortgage mb-5">
              Mortgages <br /> Made Simple
            </h1>
          </div>

          <div className="row gy-4 mt-0">
            <div className="col-12 col-md-3  d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column flex-shrink-0 align-items-center mt-5">
                <span className="btn-lg-dark">Start my approval</span>
                <span>
                  <i className="bi bi-clock"></i>3 min | No credit impact
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="./images/hero-variant-c.webp"
                className="img-fluid"
                alt="Better Mortgage"
              />
            </div>

            <div className="col-12 col-md-3 d-flex align-items-center justify-content-center g-star">
              <div className="d-flex flex-column flex-shrink-0">
                <span>
                  <i className="bi bi-google me-2"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </span>
                <span className="text-white small">
                  4.6 stars | 4566 Google reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Find out section--> */}
      <section id="find-out" className="find-out section">
        <div className="containerfluid bg-white ">
          <div className="row gy-3">
            <div className="col-12 col-lg-5 pb-2 order-2 order-lg-1 ">
              <div className="d-flex flex-column align-items-center">
                <p className="order-2 order-lg-1 mt-2">
                  <img
                    src="./images/still-quote-Arian.webp"
                    className="img-fluid"
                    alt="find-out-pic"
                  />
                </p>
                <p className="mt-2 order-1 order-lg-2 ">
                  <span className="btn-outline-sm featured">Arian</span>
                  <span className="btn-outline-sm">Amanda</span>
                  <span className="btn-outline-sm">Paul</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex align-items-center justify-content-center order-1 order-lg-2">
              <div className="d-flex flex-column align-items-center">
                <h1>
                  Find out why <br />
                  We are better
                </h1>
                <span className="see-all">see all our stories</span>
                <p>
                  <i className="bi bi-star-fill"></i>
                  <span className="fw-bold mx-2">Trustpiolet</span>
                  <span>Excellent</span>
                  <span className="fw-bold ms-2">4.3</span> out of 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <!--Featured section--> */}
      <section id="feature" className="feature section bg-white">
        <div className="container bg-white pt-3">
          <div className="row gy-3 pb-5 ">
            <div className="col-12 col-lg-6">
              <h1>
                Got questions?
                <br />
                We've got answers
              </h1>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-end justify-content-center">
              <div className="d-flex justify-content-start">
                <span className="featured">Our products</span>
                <span>Calculators</span>
                <span>Guides & FAQs</span>
              </div>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-12 col-lg-4 surface p-4 me-4">
              <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between align-items-start">
                <div>
                  <h3>
                    Buying Your First Home
                    <br /> With Better Mortgage
                  </h3>
                  <div className="icon flex-shrink-0 my-2">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>

                <img
                  src="./images/first-home.webp"
                  className="img-fluid"
                  width="300px"
                  height="200px"
                  alt="first-home-pic"
                />
              </div>
            </div>
            <div className="col-12 col-lg-7 surface p-4 border">
              <div className="row gy-4">
                <div className="col-12 col-md-6">
                  <div className="d-flex flex-column">
                    <h3>
                      {' '}
                      One Day Mortgage<sup className="fs-6 text-muted">1</sup>
                    </h3>
                    <p>
                      kicks your home loan into hyperdrive: go from locked rate
                      to Commitment Letter in a single day. Traditional lenders
                      deliver a Commitment Letter in a few weeks<sup>1</sup>.
                    </p>
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 pe-5">
                  <img
                    src="./images/one-day-mortgage.webp"
                    className="img-fluid"
                    width="300px"
                    alt="one-day-pic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-3 mt-3">
            <div className="col-12 col-lg-7 d-flex align-items-center surface me-4 ">
              <div className="d-flex flex-shrink-0 order-2 order-lg-1 p-3">
                <img
                  src="./images/better-heloc.webp"
                  className="img-fluid"
                  width="250px"
                  alt="better-heloc-pic"
                />
              </div>

              <div className="order-1 order-lg-2 ">
                <h3>Better HELOc</h3>
                <p>
                  Introducing One Day HELOC™—your express lane to getting cash
                  from your home with our Home Equity Line of Credit
                </p>
                <div className="icon flex-shrink-0">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 surface">
              <div className="d-flex flex-md-row flex-lg-column p-5 justify-content-between">
                <div className="mb-3">
                  <h3>Insurance</h3>
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>

                <img
                  src="./images/insurance.webp"
                  className="img-fluid"
                  width="300px"
                  height="250px"
                  alt="insurance-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
