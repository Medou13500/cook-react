// Footer.jsx
import React from 'react';
import images from '../assets/images/footer.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content h-42 ">
        <img src={images} alt="Footer" />
      </div>
        <div className="footer-text bg-red-500 h-40 text-center">
            <p className="pt-20">Copyright 2024 Let's cook</p>

            </div>
      
    </footer>
  );
}

export default Footer;
