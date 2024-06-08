import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <div className="bg-dark text-white" style={{ marginTop: "50px" }}>
        <div className="container">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </section>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}
          >
            <p>
              We make creative stuff to give an extra spark to your home. Our
              items are made with love and effort to sooth our eyes when we are
              looking at them. We deliver what we have mentioned and what you
              see in the pictures. All these items are made with cement,
              plastic, ceramic and other basic stuff and our prices are also
              cheap compare to market price.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
