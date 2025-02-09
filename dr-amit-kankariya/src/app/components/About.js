import React, { useEffect } from "react";
import { FaCheckCircle, FaLocationArrow } from "react-icons/fa";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("../lib/wow/wow.js") : null;

function About() {
  new WOW().init();
  return (
    <div
      id="aboutUs"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                About Us
              </h5>
              <h1 className="display-5 mb-0">
                The World's Best Dental Clinic That You Can Trust
              </h1>
            </div>
            <h4 className="text-body fst-italic mb-4">
              Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
              sit clita duo justo magna dolore
            </h4>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div className="row g-3">
              <div className="col-sm-4 wow zoomIn" data-wow-delay="0.3s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3">
                    <FaCheckCircle />
                  </i>
                  Award Winning
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3">
                    <FaCheckCircle />
                  </i>
                  Professional Staff
                </h5>
              </div>
              <div className="col-sm-4 wow zoomIn" data-wow-delay="0.6s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3">
                    <FaCheckCircle />
                  </i>
                  24/7 Opened
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3">
                    <FaCheckCircle />
                  </i>
                  Fair Prices
                </h5>
              </div>
              <div className="col-sm-4 wow zoomIn m-auto" data-wow-delay="0.6s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3 fw-bolder"></i>
                  <FaLocationArrow
                    color="#06a3da"
                    style={{ marginRight: "10px" }}
                  />
                  Located at
                </h5>
              </div>
            </div>
            <a
              href="appointment.html"
              className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
              data-wow-delay="0.6s"
            >
              Make Appointment
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <div className="mapouter w-100 h-100 rounded wow zoomIn border border-primary">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    width="100%"
                    height="650px"
                    frameBorder="4"
                    data-wow-delay="0.9s"
                    src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=Amar Center,15th August Chowk, Somwar Peth Pune&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
