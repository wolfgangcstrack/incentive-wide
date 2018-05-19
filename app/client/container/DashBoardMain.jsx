import React, { Component } from 'react';


class DashBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Daniel',
    }
    // bindings

  }
  render() {
    return (
      <div>
      Hello again {this.state.name}
      </div>
    )
  }
}


module.exports.DashBoardMain = DashBoardMain;
