import React, { Component } from 'react';
// import { DashBoardTemplate } from '../present/DashBoardTemplate';
import data from './mockData.js'
import { PreviewTileTemplate } from './../present/PreviewTileTemplate.jsx'

class PreviewTileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
    };
    // bindings

  }

  render() {
    return (
      <div>
        {/* {console.log(this.state.list)} */}
        {/* <PreviewTileTemplate test='hmm' /> */}
          <div className="container" >
           <div className="table" id="table-border">
             <span className="table-title">1st goal completed</span>
             <span className="goal">Gift = $500</span>
             <span className="table-title">2nd goal completed</span>
             <span className="goal">Gift = $500 - $1000</span>
             <span className="table-title">3rd goal completed</span>
             <span className="goal">Gift = $1000 - $1500</span>
             <span className="table-title">4th goal completed</span>
             <span className="goal">Gift = $1500 +</span>
           </div>
          </div>    
        <div className="container">
          {this.state.list.map((info) => {
            return (<PreviewTileTemplate title={info.title} picture={info.picture} desc={info.description} points={info.points} />)
          })}
        </div>
      </div>


    );
  }
}


module.exports.PreviewTileContainer = PreviewTileContainer;
