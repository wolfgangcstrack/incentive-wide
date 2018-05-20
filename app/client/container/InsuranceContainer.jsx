import React, { Component } from 'react';
import Insurance from '../present/Insurance';

class InsuranceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active:false,
    }

    this.isActive = this.isActive.bind(this);
  }
  isActive() {
    this.setState((prevState, props) => {
      return { active: !prevState.active };
    });
  }

  render(){
    return (
      <Insurance isActive={this.isActive} active={this.state.active} />
    )
  }
}


export default InsuranceContainer