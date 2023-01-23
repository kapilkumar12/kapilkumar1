import React from "react";

const nav = () => {
  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header header-transparent"
      >
        <div className="container ">
          <div className="row ">
            <div className="col-lg-9 col-md-6 ">
              <div className="logo">
                <a href="#">
                  <img
                    src="/images/Inverse Logo transparent.png"
                    alt="logo"
                    className="img-fluid d-inline-flex"
                    loading="lazy"
                  />
                </a>

                <span className="text-light">
                  | A Distributor Management System
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <nav id="navbar" className="navbar ">
                <div className="row">
                  <div className="col-lg-4 col-md-4 navbar ">
                    <ul>
                      <li>
                        <a className="nav-link scrollto active" href="#hero">
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 navbar">
                    <ul>
                      <li>
                        <a className="nav-link " href="#about-section">
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 navbar">
                    <ul>
                      <li>
                        <a className="nav-link scrollto" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ul></ul> */}
              </nav>
            </div>
          </div>

          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="row justify-content-between h-100">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center col-sm-12">
              <div data-aos="zoom-out" className="banner_content">
                <p className="sm_title text-left mb-0 mr-3">
                  Eazy ERP 4.0 Bridge towards Simpler Operations!
                </p>

                <h2 className="text-start" data-aos="zoom-in">
                  <span>Connecting Everyone </span> &nbsp;
                </h2>

                <h3
                  className="text-start mt-4"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  Coming on 23 January
                </h3>

                <div className="row mx-auto justify-content-center">
                  <div className="col-6 text-center text-lg-start px-0">
                    <a href="#contact" className="btn-get-started scrollto">
                      <i className="bi bi-info-lg"></i> Reserve your seat
                    </a>
                  </div>

                  <div className="pl-3 ml-3 col-6 text-center">
                    <a
                      href="#"
                      className="glightbox play-btn mb-4 btn-get-started scrollto"
                    >
                      <i className="bi bi-play-fill"></i> Know more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img col-sm-12"
              data-aos="zoom-out"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* about section start */}
      <div id="about-section">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header mt-4">
              <h2>About Us</h2>
            </div>

            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>What we do</h3>
                  <h2>
                    We offer a wide range of IT Solutions like ERP, CRM, DMS,
                    Asset Management, Payroll & customized solutions that help
                    our clients improve their operational efficiency while
                    keeping their budget in place.
                  </h2>
                  <p>
                    Enterprise Resource Planning System, a software which made a
                    significant impact in the life of Indian Manufacturers by
                    remodeling their existing manual system of working to
                    Automating it, A system which was ideally designed to track
                    the activities has travelled leaps and miles from being a
                    mere tracking system to a virtual member that monitors,
                    tracks and guides the users in order to streamline and
                    maintain the operational efficiency of the business. Ever
                    Since 2001, the market has been penetrated with hundreds of
                    ERP players, everyone stating themselves as the best. As we
                    digged down more and more we realized that most of the small
                    & mid size companies still resisting to move towards IT due
                    to multiple reason such as budget constraints, hassle of
                    using 2 different softwares, Security issues, to name a few
                    That is how Eazy came into picture with a vision of standing
                    out from Rest with its unique preposition and simultaneously
                    catering the key challenges of SME Manufacturers thereby
                    making their lives Easy! This led to the launch of India’s
                    1st Tally Integrated ERP, Eazy ERP in 2007. An ERP which
                    came with the simplicity of Tally and Power of ERP
                    <span id="dots">...</span>
                    <br />
                    <br />
                    <span id="more-text">
                      But Today, in the 21st century, With ever-changing and
                      fast-growing consumer patterns, dynamic demand,
                      competitive markets, Multiple variants of the same
                      product, different types of schemes and Offers, Lacs of on
                      boarded Super Stockists, Distributors, Retailers, their
                      involvement in Multi Brand, all these collectively gave
                      boom to the entire supply chain network like never before.
                      <br />
                      Moreover now the Chain of Networks has increased from
                      "Manufacturer, Superstockist, Distributor and Retailer' to
                      other business partners as well who collectively complete
                      the entire cycle.
                    </span>
                  </p>
                  <div className="text-center text-lg-start">
                    <a
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                      id="myBtn"
                    >
                      <span id="myBtn-text">Know More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12 d-flex align-items-center order-1 order-lg-2"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <a href="#contact">
                  <img
                    src="/images/about1.jpeg"
                    className="img-fluid"
                    alt="about1"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* about section end */}

        {/*  Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="tab-content" data-aos="fade-up">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 mt-3 mt-lg-0">
                    <h3>Because Every Business Partner Matters!</h3>
                    <p className="fst-italic">
                      From the initial phase to today the software has traveled
                      through various approaches i.e. From Portal Based System
                      to Tally & Busy Integrated DMS to Hybrid DMS - the Nxt Gen
                      DMS. The Journey itself depicts the vision of Eazy DMS of
                      providing the Best Solution to its clients by:
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> Solving the Need of
                        the Hour!
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Providing the
                        required platform as per the Industry Trend.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Binding the entire
                        Business Channel Together.
                      </li>
                    </ul>

                    <strong style={{ fontSize: "20px" }}>
                      What to expect from Fusion 4.0 aka Eazy DMS 4.0?
                    </strong>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> A techno-fusion of
                        your Present Need and Future Want!
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> A system bringing
                        all your associates on a single platform.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Now More
                        visibility, Clear Communication, Better Coordination and
                        Best of Best Results.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 text-center">
                    <a href="#contact">
                      <img
                        src="/images/about-image.jpeg"
                        alt="about"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}
      </div>

      {/*  Clients Section */}
      <section id="clients" className="clients clients">
        <div className="container">
          <h3>Why Choose Rest when Industry Leaders Chose the Best!</h3>
          <div className="row text-center customer-logos slider">
            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/haldiram.jpg"
                className="img-fluid"
                alt="haldiram"
                loading="lazy"
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/some other logo.jpg"
                className="img-fluid"
                alt="masala"
                loading="lazy"
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/hindware.jpg"
                className="img-fluid"
                alt="hindware"
                loading="lazy"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/campus.jpeg"
                className="img-fluid"
                alt="Campus"
                loading="lazy"
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/Good Year.jpeg"
                className="img-fluid"
                alt="Good year"
                loading="lazy"
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 slide">
              <img
                src="/images/jamna auto.jpeg"
                className="img-fluid"
                alt="wah"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section --> */}

      {/* block-image Section  */}
      <section className="block-image">
        <a href="#contact">
          <div className="container-fluid px-0 mx-0" data-aos="zoom-in">
            <img
              src="/images/banner-final.jpeg"
              alt="coming-soon"
              width="100%"
              height="78%"
              loading="lazy"
            />
          </div>
        </a>
      </section>
      {/* <!-- End block-image Section --> */}

      {/* Contact Section  */}
      <section id="contact" className="section-bg contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Reserve your seat</h2>
          </div>

          <div className="row contact-info justify-content-center">
            <div className="row col-md-6">
              <div className="col-md-12 box1">
                <div className="contact-phone">
                  <i className="bi bi-phone"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+918745885500">+91 8745885500</a>
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="contact-email">
                  <i className="bi bi-envelope"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:contact@eazydms.com">contact@eazydms.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row col-md-6">
              <form>
                <div className="form_contant mt-3 ">
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control text-center inputtag"
                      id="name"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="form-group p-2 ">
                    <input
                      type="text"
                      className="form-control text-center inputtag"
                      id="company"
                      placeholder="Company Name"
                      name="companyName"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control text-center inputtag"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control text-center inputtag"
                      id="email"
                      placeholder="E-mail(Official)"
                      name="email"
                      required
                    />
                  </div>

                  <div className="text-center mt-3 p-2">
                    <input
                      type="submit"
                      id="submit-btn"
                      value="Send"
                      className="text-lg  b24-form-btn"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}

      {/* footer */}
      <footer className="footer">
        <div className="container text-center py-3">
          <div id="copyright">
            <h6>
              &copy; Copyright{" "}
              <strong>
                <span id="year"></span>
              </strong>{" "}
              . All Rights Reserved
            </h6>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <div className="Book-Demo-BTN">
        <a href="#contact" aria-label="Book demo">
          <img
            src="/images/Reserve Your Seat.png"
            alt="free-demo"
            loading="lazy"
            width="46"
            height="200"
          />
        </a>
      </div>
    </>
  );
};

export default nav;
