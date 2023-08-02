import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copy-right">Let's stay in touch!</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <a href="https://www.instagram.com/rtecno/" target="_blank" rel="noopener noreferrer">
                <img className="icons mx-2" src="../icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/rtecno/" target="_blank" rel="noopener noreferrer">
                <img className="icons mx-2" src="../icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/rtecno/" target="_blank" rel="noopener noreferrer">
                <img className="icons mx-2" src="../icons/youtube.svg" alt="YouTube" />
              </a>
              <a href="https://www.twitter.com/rtecno/" target="_blank" rel="noopener noreferrer">
                <img className="icons mx-2" src="../icons/twitter.svg" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copy-right mt-4">© 2023 RTecno - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;