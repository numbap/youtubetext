import React from "react";
import GoogleAuth from "./GoogleLogin.component";
import { connect } from "react-redux";

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <a className='navbar-brand' href='#'>
      YouTube Caption Browser
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'></ul>
      <GoogleAuth />
    </div>
  </nav>
);

export default Header;
