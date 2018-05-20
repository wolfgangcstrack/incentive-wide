import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SavingTile from '../present/SavingTile'

const style = {
  // border: "5px solid #3C362A",
  height: "260px",
  width: "260px",
  // backgroundColor: "#3C362A"
}

const picStyle = {
  height: "90px",
  width: "90px",
  display: "block",
  margin: " 0 auto",
}


class SavingContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      goal: 0,
      add: 0,
    }
  }
  render() {
    return (
      <div>
        {/* <DashBoardTemplate name={this.state.name} /> */}
        <div style={style} className="SaveContainer">
          <img style={picStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFlcLfCSwOEcwga43eSpVo0_DZYlT_4dd0NcNHstdaSGMxyXG" />

          <div style={{ paddingTop: "10px" }}>
            <p>current goal: </p>
            <form>
              <label>
                Goal:
                <input type="text" name="add" />
              </label>
            </form>
            <form>
              <label>
                Add:
                <input type="text" name="add" />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SavingContainer.propTypes = {

};

export default SavingContainer;