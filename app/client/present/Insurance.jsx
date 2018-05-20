import React, { Component } from 'react';

const Insurance = () => (
  <div className="dropdown is-active">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>Content</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu2" role="menu">
    <div className="dropdown-content">
      <div className="dropdown-item">
        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
      <hr className="dropdown-divider"/>
      <div className="dropdown-item">
        <p>You simply need to use a  instead.</p>
      </div>
      <hr className="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        This is a link
      </a>
    </div>
  </div>
</div>
)

export default Insurance;