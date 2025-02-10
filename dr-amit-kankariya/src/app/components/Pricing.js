import React from "react";

import CarouselComponent from "./CarouselComponent";

function Pricing() {
  return (
    <div
      id="pricing"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container customMargin">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Pricing Plan
              </h5>
              <h1 className="display-5 mb-0">
                We Offer Fair Prices for Dental Treatment
              </h1>
            </div>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo
              eirmod magna dolore erat amet
            </p>
            <h5
              className="text-uppercase text-primary wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Call for Appointment
            </h5>
            <h1 className="wow fadeInUp" data-wow-delay="0.6s">
              +91 9226156789
            </h1>
          </div>
          <div className="col-lg-7">
            <div className="wow zoomIn">
              <CarouselComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
