import React, { Component } from 'react';
import { DashBoardTemplate } from '../present/DashBoardTemplate';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: "bottom center"
};

class DashBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Daniel',
    };
    // bindings
  }

  render() {
    return (
      <Provider template={AlertTemplate} {...options}>
        <DashBoardTemplate
          name={this.state.name}
        />
      </Provider>
    );
  }
}


module.exports.DashBoardMain = DashBoardMain;
