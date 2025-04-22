import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 My Website. All rights reserved.</p>
        <div class="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
