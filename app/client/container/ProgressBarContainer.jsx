import React, { Component } from 'react';
import { ProgressBar } from '../present/ProgressBar'

const fakeData = {
  credit: {goal: 700, actual: 500},
  savings: {goal: 10000, actual: 10000},
  insurance: {goal: 4, actual: 2},
  refer: {goal: 4, actual: 4}
}
class ProgressBarContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <ProgressBar data={fakeData}/>
      </div>
    )
  }
}

module.exports.ProgressBarContainer = ProgressBarContainer