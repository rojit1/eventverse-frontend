import React from 'react'

function Footer() {
  return (
    <section className="footer_wrapper mt-3 mt-md-0 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-logo mb-3 mb-md-0">
              <img src="/assets/images/logo2.png" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <ul
              className="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center jus social-icon mb-3 mb-md-0">
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i> </a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-linkedin-in"></i> </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
              <p className="mb-0">Copyright © 2022 <a href="https://rojitmanandhar.com.np">eventverse</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer