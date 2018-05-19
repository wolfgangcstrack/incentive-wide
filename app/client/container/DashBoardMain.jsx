import React, { Component } from 'react';
import { DashBoardTemplate } from '../present/DashBoardTemplate';

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
      <div>
        <DashBoardTemplate name={this.state.name} />
      </div>
    );
  }
}


module.exports.DashBoardMain = DashBoardMain;
