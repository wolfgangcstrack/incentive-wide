import React, { Component } from 'react';
const style = {
  width : "100%",
  height: "500px",
  margin: "auto",
}

const indStyle = {
  paddingTop: "10px",
  height: "160px",
  // width: "25%",
  // border: "1px solid black",
  backgroundColor: '#E8F7EE',
}
const indStyle2 = {
  paddingTop: "10px",
  height: "160px",
  // width: "25%",
  // border: "1px solid black",
  backgroundColor: '#C9D6EA',
}

const indStyle3 = {
  paddingTop: "20px",
  border: "1px solid black",
  backgroundColor: '#B8C4BB',
}

const progressSty = {
  marginLeft:"20px",
  width: "450px",
}

const ProgressBar = ({data}) => {
  percParc = {
    credit: data.actual/data.goal
  }
  return(
  <div className='column is-4'>
  <div className="card events-card">
  <div style={indStyle} className="credit">
    <h1 className="title">credit</h1>
        <progress style={{marginLeft: "20px", width:"450px"}} className="progress is-primary progress is-large" value={data.credit.actual / data.credit.goal * 100} max="100"></progress>
    <span>actual: {data.credit.actual} goal: {data.credit.goal}</span>
  </div>
  <div style={indStyle2}>
        <h1 className="title">savings</h1>
        <progress style={{ marginLeft: "20px", width: "450px" }} className="progress is-info progress is-large" value={data.savings.actual / data.savings.goal * 100} max="100">50%</progress>
    <span>actual: {data.savings.actual} goal: {data.savings.goal}</span>
  </div>
  <div style={indStyle}>
        <h1 className="title">insurance</h1>
        <progress style={{ marginLeft: "20px", width: "450px" }} className="progress is-primary progress is-large" value={data.insurance.actual / data.insurance.goal * 100} max="100">30%</progress>
        <span>actual: {data.insurance.actual} goal: {data.insurance.goal}</span>
  </div>
  <div style={indStyle2}>
        <h1 className="title">referals</h1>
        <progress style={{ marginLeft: "20px", width: "450px" }} className="progress is-info progress is-large" value={data.refer.actual / data.refer.goal * 100} max="100">30%</progress>
        <span>actual: {data.refer.actual} goal: {data.refer.goal}</span>
  </div>
  </div>
  </div>

  )
}
module.exports.ProgressBar = ProgressBar