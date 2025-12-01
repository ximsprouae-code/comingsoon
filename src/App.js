import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
// GitHub removed; add back if you want it later
// import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import logo from './assets/xims-logo.png';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        {/* HEADER */}
        <div className="header">
          <div className="logo">
            <a href=".">
              <img
                src={logo}
                alt="XIMS Solutions & Technologies"
                className="logo-img"
              />
            </a>
          </div>

          <div className="social">
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="content">
          <div className="title-holder">
            <h1>Connecting Entities Through Technology.</h1>
            <p>
              Our website is coming soon. Check back for updates, or reach out
              to us directly by email.
            </p>
          </div>

          <a href="mailto:info@ximstechsolutions.com?subject=Website%20Enquiry&body=Hi%20XIMS%20Solutions%20%26%20Technologies,">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
