import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DashBoardMain } from './container/DashBoardMain';

const App = () => (
  <div>
    <DashBoardMain />
  </div>
)

if (Meteor.isClient) {
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById('app'));
  });
}

