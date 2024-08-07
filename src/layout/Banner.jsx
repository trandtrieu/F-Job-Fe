import React from "react";


export default function Banner() {
  return (
    <>
    
      <section className="banner-section">
        <div className="auto-container">
          <div className="row" >
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInUp"
                data-wow-delay="1000ms"
              >
                <div className="title-box">
                  <h3>
                    There Are <span className="colored">93,178</span> Postings
                    Here
                    <br /> For you!
                  </h3>
                  <div className="text">
                    Find Jobs, Employment &amp; Career Opportunities
                  </div>
                </div>
                {/* Job Search Form */}
                <div className="job-search-form">
                  <form
                    method="post"
                    action="https://creativelayers.net/themes/superio/job-list-v10.html"
                  >
                    <div className="row">
                      <div className="form-group col-lg-5 col-md-12 col-sm-12">
                        <span className="icon flaticon-search-1" />
                        <input
                          type="text"
                          name="field_name"
                          placeholder="Job title, keywords, or company"
                        />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                        <span className="icon flaticon-map-locator" />
                        <input
                          type="text"
                          name="field_name"
                          placeholder="City or postcode"
                        />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          <span className="btn-title">Find Jobs</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Job Search Form */}
                {/* Popular Search */}
                <div className="popular-searches">
                  <span className="title">Popular Searches : </span>
                  <a href="#">Designer</a>,<a href="#">Developer</a>,
                  <a href="#">Web</a>,<a href="#">IOS</a>,<a href="#">PHP</a>,
                  <a href="#">Senior</a>,<a href="#">Engineer</a>,
                </div>
                {/* End Popular Search */}
              </div>
            </div>
            <div className="image-column col-lg-5 col-md-12">
              <div className="image-box">
                <figure
                  className="main-image wow fadeIn"
                  data-wow-delay="500ms"
                >
                  <img
                    src="../assets/images/resource/banner-img-1.png"
                    alt=""
                  />
                </figure>
                {/* Info BLock One */}
                <div
                  className="info_block anm wow fadeIn"
                  data-wow-delay="1000ms"
                  data-speed-x={2}
                  data-speed-y={2}
                >
                  <span className="icon flaticon-email-3" />
                  <p>
                    Work Inquiry From <br />
                    Ali Tufan
                  </p>
                </div>
                {/* Info BLock Two */}
                <div
                  className="info_block_two anm wow fadeIn"
                  data-wow-delay="2000ms"
                  data-speed-x={1}
                  data-speed-y={1}
                >
                  <p>10k+ Candidates</p>
                  <div className="image">
                    <img
                      src="../assets/images/resource/multi-peoples.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* Info BLock Three */}
                <div
                  className="info_block_three anm wow fadeIn"
                  data-wow-delay="1500ms"
                  data-speed-x={4}
                  data-speed-y={4}
                >
                  <span className="icon flaticon-briefcase" />
                  <p>Creative Agency</p>
                  <span className="sub-text">Startup</span>
                  <span className="right_icon fa fa-check" />
                </div>
                {/* Info BLock Four */}
                <div
                  className="info_block_four anm wow fadeIn"
                  data-wow-delay="2500ms"
                  data-speed-x={3}
                  data-speed-y={3}
                >
                  <span className="icon flaticon-file" />
                  <div className="inner">
                    <p>Upload Your CV</p>
                    <span className="sub-text">
                      It only takes a few seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
