import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../present/SavingTile'

const style = {
  // border: "1px solid #3C362A",
  height: "260px",
  width: "260px",
  // backgroundColor: "#3C362A"
}
const badCode = {
  margin: "auto",
  padding: "10px"
}
const header = {
  paddingTop: "20px",
  margin: "auto",
  width: "50%",
}
const picStyle = {
  height: "90px",
  width: "90px",
  display: "block",
  margin: " 0 auto",
}
const plusImg = {
  height: "25px",
  width: "25px",
  // display: "block",
  // margin: " 0 auto",
}

class SavingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goal: 80000,
      add: 0,
      modalState: false,
      housingPrice: 0,
      salary: 0,
      value: 0,
      bank: 1000,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.calculateGoal = this.calculateGoal.bind(this);
    this.increase = this.increase.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.calculateGoal()
  }
  handleSubmit1(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  calculateGoal() {
    let goal = this.state.value
    let newGoal = goal * 0.075
    this.setState({ goal: newGoal })
    console.log(goal)

  }
  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      console.log('clicked')
      return { modalState: newState };
    });
  }
  increase() {
    const inc = this.state.bank + parseInt(this.state.value)
    console.log(typeof this.state.value)
    this.setState({ bank: inc })
  }
  render() {
    return (
      <div>
        {/* <DashBoardTemplate name={this.state.name} /> */}
        <div style={style} className="SaveContainer">
          <img style={picStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFlcLfCSwOEcwga43eSpVo0_DZYlT_4dd0NcNHstdaSGMxyXG" />
          {/* <button>eskeddit</button> */}
          <div style={header}>
            <h2>Goal: ${this.state.goal}</h2>
            <h2>Bank: ${this.state.bank}</h2>
          </div>
          {/* <div className="modal-background"></div> */}
          <Modal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
            title="Savings input"
          >

            <form>
              <label> Housing Range:
              <input className="input" type="text" placeholder="exp: 1000000" name="name" onChange={this.handleChange} />
              </label>
              <p>After submitting we calculate the optimal saving goal for your first house</p>
              <button className="button is-primary" onClick={this.handleSubmit}>submit</button>
            </form>
            <h3>incremental :</h3>
            <form>
              <label>
                Salary: <input className="input" type="text" placeholder="exp: 1000000" name="name" onChange={this.handleChange} />
              </label>
              <p>if you decide to do incremental payments we take %20 of your salary every month</p>
            </form>
            <button className="button is-primary" onClick={this.handleSubmit1}>submit</button>
          </Modal>
          <div style={badCode}>
            <form style={{ paddingLeft: "38px" }}>
              <label>
                <input style={{ width: "120px", paddingLeft: "53px" }} onChange={this.handleChange} className="input" type="text" name="name" />
                <span><img style={plusImg} src="data:image/png;base64,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"
                  onClick={this.increase} /></span>
              </label>
            </form>
            {/* <img style={plusImg} src="data:image/png;base64,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"
              onClick={this.increase}          
            /> */}
            <a style={{ paddingLeft: "74px" }} onClick={this.toggleModal}>
              Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}

SavingContainer.propTypes = {

};

export default SavingContainer;