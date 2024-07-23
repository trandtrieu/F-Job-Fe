import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Design = () => {
  const testimonialOptions = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  const clientOptions = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 },
    },
  };

  return (
    <>
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              "Comments are gold for us to move forward."
            </div>
          </div>
          <div className="carousel-outer wow fadeInUp">
            <OwlCarousel
              className="testimonial-carousel owl-theme"
              {...testimonialOptions}
            >
              <div className="testimonial-block">
                <div className="inner-box">
                  <h4 className="title">Good theme</h4>
                  <div className="text">
                    FJOB provided me with outstanding support and guidance in
                    finding a new job. The team is dedicated to helping job
                    seekers succeed.
                  </div>
                  <div className="info-box">
                    <div className="thumb">
                      <img
                        src="https://hrsviet.com/uploads/demo/general/testi-thumb-1.png"
                        alt="Testimonial 1"
                      />
                    </div>
                    <h4 className="name">Nicole Wells</h4>
                    <span className="designation">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block">
                <div className="inner-box">
                  <h4 className="title">Great quality!</h4>
                  <div className="text">
                    The experience with FJOB was phenomenal. They helped me
                    navigate the job market and secure a position that matched
                    my skills perfectly.
                  </div>
                  <div className="info-box">
                    <div className="thumb">
                      <img
                        src="https://hrsviet.com/uploads/demo/general/testi-thumb-3.png"
                        alt="Testimonial 2"
                      />
                    </div>
                    <h4 className="name">Gabriel Nolan</h4>
                    <span className="designation">Consultant</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block">
                <div className="inner-box">
                  <h4 className="title">Awesome Design</h4>
                  <div className="text">
                    FJOB's platform is user-friendly and efficient. They made
                    the job search process seamless and stress-free. Highly
                    recommend their services!
                  </div>
                  <div className="info-box">
                    <div className="thumb">
                      <img
                        src="https://hrsviet.com/uploads/demo/general/testi-thumb-2.png"
                        alt="Testimonial 3"
                      />
                    </div>
                    <h4 className="name">Ashley Jenkins</h4>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}

      {/* Clients Section */}
      <section className="clients-section">
        <div className="sponsors-outer wow fadeInUp">
          <OwlCarousel
            className="sponsors-carousel owl-theme"
            {...clientOptions}
          >
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img
                    src="https://hrsviet.com/uploads/demo/general/brand-2.png"
                    alt="Client 1"
                  />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img
                    src="https://hrsviet.com/uploads/demo/general/brand-5.png"
                    alt="Client 2"
                  />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img
                    src="https://hrsviet.com/uploads/demo/general/brand-7.png"
                    alt="Client 3"
                  />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img
                    src="https://hrsviet.com/uploads/demo/general/brand-1.png"
                    alt="Client 4"
                  />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img
                    src="https://hrsviet.com/uploads/demo/general/brand-4.png"
                    alt="Client 5"
                  />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img src="../assets/images/imgTotal/1-6.png" alt="Client 6" />
                </a>
              </figure>
            </div>
            <div className="slide-item">
              <figure className="image-box">
                <a href="#">
                  <img src="../assets/images/imgTotal/1-7.png" alt="Client 7" />
                </a>
              </figure>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* End Clients Section */}

      {/* About Section */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column wow fadeInUp">
                <div className="sec-title">
                  <h2>Top Branding - Leading Brand Communication</h2>
                  <div className="text">
                    Helps businesses' brands, products, services, and programs
                    reach more than 5 million potential candidates on FJOB.
                  </div>
                </div>
                <ul className="list-style-one">
                  <li>
                    More reasonable costs than similar banner advertising
                    services.
                  </li>
                  <li>Support consulting and professional banner design.</li>
                  <li>
                    Build a reputable recruitment page, help businesses find
                    candidates, and recruit effectively.
                  </li>
                </ul>
                <a href="#" className="theme-btn btn-style-one bg-blue">
                  <span className="btn-title">Get Started</span>
                </a>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <figure className="image wow fadeInLeft">
                <img
                  style={{ borderRadius: "7px" }}
                  src="https://cdn.create.vista.com/api/media/small/175239078/stock-photo-happy-african-american-man-name-tag-writing-something-planchette-modern"
                  alt="About Us"
                />
              </figure>
              <div className="count-employers wow fadeInUp">
                <div className="check-box">
                  <span className="flaticon-tick"></span>
                </div>
                <span className="title">300k+ Employers</span>
                <figure className="image">
                  <img src="../assets/images/multi-logo.png" alt="Multi-logo" />
                </figure>
              </div>
            </div>
          </div>

          <div className="fun-fact-section">
            <div className="row">
              <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                <div className="count-box">
                  <span className="count-text" data-speed="3000" data-stop="4">
                    1
                  </span>
                  M
                </div>
                <h4 className="counter-title">4 million daily active users</h4>
              </div>
              <div
                className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="count-box">
                  <span className="count-text" data-speed="3000" data-stop="12">
                    3
                  </span>
                  k
                </div>
                <h4 className="counter-title">Over 12k open job positions</h4>
              </div>
              <div
                className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="count-box">
                  <span className="count-text" data-speed="3000" data-stop="22">
                    2
                  </span>
                  k
                </div>
                <h4 className="counter-title">Over 22k stories shared</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* News Section */}
      <section className="news-section">
        <div className="auto-container">
          <div className="section-title">RECENT NEWS ARTICLES</div>

          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {[
              {
                image:
                  "https://topcv.com.vn/wp-content/uploads/2023/04/Cover-TopCV-lot-Top-100-Thuong-hieu-hang-dau-Viet-Nam-3.jpeg",
                alt: "News 1",
                category: "BRAND",
                description:
                  "TopCV is in the Top 100 Leading Brands in Vietnam",
                link: "blog-detail.html",
              },
              {
                image:
                  "https://topcv.com.vn/wp-content/uploads/2023/04/Ban-sao-DSC02240.jpg",
                alt: "News 2",
                category: "TECH",
                description:
                  "Top 15 Startups selected by Google to participate in Google for Startups Accelerator: Southeast Asia",
                link: "blog-detail.html",
              },
              {
                image:
                  "https://static2-images.vnncdn.net/files/publish/2022/12/17/anh-1-246.jpg",
                alt: "News 3",
                category: "BRAND",
                description:
                  "A pair of Make in Vietnam 2022 Digital Technology Product awards",
                link: "blog-detail.html",
              },
              {
                image:
                  "https://topcv.com.vn/wp-content/uploads/2023/04/Startups-Accelerator-Southeast-Asia-2020-1.jpeg",
                alt: "News 4",
                category: "STARTUP",
                description:
                  "Double awards at the 2022 Vietnam Top 10 IT Enterprises Honor Ceremony",
                link: "blog-detail.html",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="news-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="inner-box"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    className="image"
                    style={{ height: "200px", overflow: "hidden" }}
                  >
                    <a href={news.link}>
                      <img
                        style={{
                          height: "95%",
                          width: "100%",
                          padding: "15px",
                          borderRadius: "23px",
                        }}
                        src={news.image}
                        alt={news.alt}
                      />
                    </a>
                  </div>
                  <div className="lower-content" style={{ flexGrow: 1 }}>
                    <ul className="post-meta">
                      <li>{news.category}</li>
                    </ul>
                    <p
                      style={{
                        margin: "0px 10px",
                        fontFamily: "'Alexandria', sans-serif",
                        padding: "0 8px",
                        fontSize: "0.9rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {news.description}
                    </p>
                  </div>
                  <a
                    href={news.link}
                    className="theme-btn read-more"
                    style={{ paddingTop: "10px" }}
                  >
                    <span className="btn btn-primary">Read More</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End News Section */}

      <section className="about-us-section">
        <div className="container">
          <h2 className="section-title">ABOUT US</h2>
          <div className="section-content">
            <div className="row">
              {/* Text Half */}
              <div className="col-lg-6 col-md-12">
                <div className="text-content design">
                  <p className="pb-8" style={{ lineHeight: "40px" }}>
                    FJOB Vietnam is a leading company in the field of HR Tech in
                    Vietnam, revolving around the human resource ecosystem with
                    4 key products:
                  </p>
                  <p className="pb-8" style={{ lineHeight: "40px" }}>
                    FJOB smart recruitment platform, TestCenter employee
                    capacity establishment and assessment platform, HappyTime
                    employee experience management and enhancement platform and
                    SHring high-performance recruitment management solution.
                  </p>

                  <p className="pb-8" style={{ lineHeight: "40px" }}>
                    Through research and continuous development of outstanding
                    core technology capabilities (especially deep application of
                    Artificial Intelligence - AI), FJOB expects to bring more
                    effective human resource solutions in the future: optimizing
                    digital experiences for candidates, thereby helping
                    businesses attract and retain talent, towards a sustainable
                    development of the Vietnamese economy.
                  </p>
                  <a href="/" className="btn btn-primary">
                    CONTACT US
                  </a>
                </div>
              </div>
              {/* Image Half */}
              <div className="col-lg-6 col-md-12">
                <div className="image-content">
                  <img
                    style={{ borderRadius: "10px" }}
                    src="../assets/images/imgTotal/bgimg.png"
                    alt="About Us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
