import React, { Component } from 'react';
import { DashBoardTemplate } from '../present/DashBoardTemplate';

class DashBoardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Daniel',
      referrals: {},
    };
    // bindings
    this.getReferrals = this.getReferrals.bind(this);
  }

  getReferrals() {
    const referrals = Referrals.find({ customerId: '2' });
    this.setState({
      referrals,
    });
  }

  render() {
    return (
      <div>
        <DashBoardTemplate
          name={this.state.name}
          referrals={this.state.referrals}
        />
      </div>
    );
  }
}


module.exports.DashBoardMain = DashBoardMain;
