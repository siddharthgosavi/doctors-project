import React from "react";
import { FaSearch, FaTooth } from "react-icons/fa";

function Navbar({ toggleModal }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0 sticky-top">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="m-0 text-primary">
          <i className="fa fa-tooth me-2">
            <FaTooth />
          </i>
          DentCare
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="#aboutUs" className="nav-item nav-link">
            About
          </a>
          <a href="#services" className="nav-item nav-link">
            Service
          </a>
          <a href="#pricing" className="nav-item nav-link">
            Pricing Plan
          </a>
          <a href="#testimonial" className="nav-item nav-link">
            Testimonial
          </a>
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <button
          type="button"
          className="btn text-dark"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search" onClick={toggleModal}>
            <FaSearch />
          </i>
        </button>
        <a href="#appointment" className="btn btn-primary py-2 px-4 ms-3">
          Appointment
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
