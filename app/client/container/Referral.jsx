import React, { Component } from 'react';

const refStyle = {
  height: '260px',
  width: '260px',
};

const input = {
  bottom: '0',
};

class Referral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div style={refStyle}>
        <h1 className="title">Refer a friend</h1>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={this.handleChange}
            className="input is-medium"
            type="text"
            placeholder="Full name"
            name="name"
            value={this.state.name}
            style={input}
          />
          <span className="icon is-left">
            <i className="fas fa-user" />
          </span>
        </div>
        <br />
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={this.handleChange}
            className="input is-medium"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            style={input}
          />
          <span className="icon is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
        <br />
        <button className="button is-success">
          Refer
        </button>
      </div>
    );
  }
}

export default Referral;
