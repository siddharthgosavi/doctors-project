import React, { useEffect } from "react";

function Spinner() {
  useEffect(() => {
    const spinner = document.getElementById("spinner");

    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove("show");
      }, 1000);
    }
  }, []);

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary m-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark m-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary m-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
